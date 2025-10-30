import { ReactNode } from 'react'

export default function Section({ children, id, className = '' }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`relative py-14 sm:py-20 ${className}`}>
      {/* Soft gradient accents */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
      {/* Centered, subtle panel behind content */}
      <div className="pointer-events-none absolute inset-0 flex justify-center" aria-hidden="true">
        <div className="w-[min(92vw,72rem)] mx-auto h-full rounded-3xl bg-slate-50/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 shadow-sm" />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}
