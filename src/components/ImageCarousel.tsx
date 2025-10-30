import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type CarouselItem = { src: string; alt?: string }

type Props = {
  items: CarouselItem[]
  autoPlayMs?: number
  className?: string
}

export default function ImageCarousel({ items, autoPlayMs = 0, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)
  const count = items.length

  useEffect(() => {
    if (!autoPlayMs || count <= 1) return
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
    return () => { if (timer.current) window.clearInterval(timer.current) }
  }, [autoPlayMs, count])

  if (count === 0) {
    return (
      <div className={`glass p-8 rounded-2xl border border-black/10 dark:border-white/10 text-center text-slate-600 dark:text-slate-300 ${className}`}>
        No creatives yet. Add images to populate this carousel.
      </div>
    )
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => { if (timer.current) window.clearInterval(timer.current) }}
      onMouseLeave={() => {
        if (autoPlayMs && count > 1) {
          timer.current = window.setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
        }
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
        <img
          key={items[index]?.src}
          src={items[index]?.src}
          alt={items[index]?.alt || 'Creative'}
          loading="lazy"
          decoding="async"
          className="w-full h-64 sm:h-80 object-contain bg-white/60 dark:bg-white/5"
        />
      </div>

      {count > 1 && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-brand-red' : 'bg-black/20 dark:bg-white/20'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

