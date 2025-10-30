import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Review = {
  name: string
  rating: number
  text: string
  avatar?: string
}

const REVIEWS: Review[] = [
  {
    name: 'Gravity Contractors Ltd',
    rating: 5,
    text:
      "They've been managing all my social media needs as well as marketing and website. Very happy with their quick response all the time and being honest. I would recommend them anyday over all the people I hired in the past from cold calls.",
  },
  {
    name: 'Sourav Bansal',
    rating: 5,
    text:
      'Pure marketing built our website, Asad is running ads for us and also managing social media. They are easy to work with and quick to respond. Asad really helped us in getting more customers',
  },
  {
    name: 'Negril 25',
    rating: 5,
    text:
      'Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will continue to use him for Social Media services. I highly recommend him.',
  },
  {
    name: 'Rehan Raees',
    rating: 5,
    text: 'Asad built my website. Very quick & professional. Highly recommend',
  },
  {
    name: 'Wade Beattie',
    rating: 5,
    text: 'Great communication, and pricing.',
  },
]

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const a = parts[0]?.[0] ?? ''
  const b = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (a + b).toUpperCase()
}

export default function ManualReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)
  const count = REVIEWS.length

  useEffect(() => {
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    return () => { if (timer.current) window.clearInterval(timer.current) }
  }, [count])

  const current = REVIEWS[index]

  return (
    <div className="relative" onMouseEnter={() => { if (timer.current) window.clearInterval(timer.current) }} onMouseLeave={() => {
      timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    }}>
      <div className="glass p-6">
        <div className="flex items-start gap-4">
          {current.avatar ? (
            <img src={current.avatar} alt={current.name} className="h-12 w-12 rounded-full object-cover border border-black/10 dark:border-white/10" loading="lazy" />
          ) : (
            <div className="h-12 w-12 rounded-full bg-brand-red/15 text-brand-red flex items-center justify-center font-semibold border border-black/10 dark:border-white/10">
              {initials(current.name)}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{current.name}</div>
              <div className="text-xs text-slate-500">5-Star Review</div>
            </div>
            <div className="mt-1 flex items-center gap-1" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`${i < current.rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}>★</span>
              ))}
            </div>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{current.text}</p>
          </div>
        </div>
      </div>
      {/* Manual controls */}
      {count > 1 && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-brand-red' : 'bg-black/20 dark:bg-white/20'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
