import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState<string | null>(null)
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setState('submitting')
    setError(null)
    try {
      if (!endpoint) {
        const name = String(data.get('name') || '').trim()
        const email = String(data.get('email') || '').trim()
        const message = String(data.get('message') || '').trim()
        const subject = encodeURIComponent(`New contact from ${name || 'Website'}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
        window.location.href = `mailto:info@asadsaif.com?subject=${subject}&body=${body}`
        setState('success')
        return
      }
      const res = await fetch(endpoint, { method: 'POST', body: data })
      if (!res.ok) throw new Error('Failed to send message')
      setState('success')
      form.reset()
    } catch (err: any) {
      setError(err.message)
      setState('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass p-6 grid gap-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="name">Name</label>
        <input id="name" name="name" required className="w-full px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10" />
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="w-full px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10" />
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10" />
      </div>
      <button disabled={state === 'submitting'} className="btn-primary">
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      {state === 'success' && <p className="text-green-600">Thanks! I’ll get back to you shortly.</p>}
      {state === 'error' && <p className="text-red-600">{error}</p>}
    </form>
  )
}
