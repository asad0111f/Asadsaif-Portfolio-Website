import { useEffect, useMemo, useRef, useState } from 'react'

type Review = {
  author_name: string
  rating: number
  relative_time_description?: string
  text?: string
  profile_photo_url?: string
}

declare global { interface Window { google?: any; __gmapsLoader?: Promise<void> } }

function loadGoogle(apiKey: string, language = 'en') {
  if (window.google?.maps?.places) return Promise.resolve()
  if (!window.__gmapsLoader) {
    window.__gmapsLoader = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=${language}`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Google Maps JS'))
      document.head.appendChild(script)
    })
  }
  return window.__gmapsLoader
}

export default function GoogleReviewsCarousel({
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined,
  placeId = import.meta.env.VITE_GOOGLE_PLACE_ID as string | undefined,
  maxReviews = 10,
}: {
  apiKey?: string
  placeId?: string
  maxReviews?: number
}) {
  const [reviews, setReviews] = useState<Review[] | null>(null)
  const [placeUrl, setPlaceUrl] = useState<string | undefined>()
  const [error, setError] = useState<string | null>(null)
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (!apiKey || !placeId) {
      setError('Missing Google API key or Place ID')
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        await loadGoogle(apiKey)
        if (cancelled) return
        const svc = new window.google.maps.places.PlacesService(document.createElement('div'))
        svc.getDetails(
          { placeId, fields: ['reviews', 'url', 'name', 'rating', 'user_ratings_total'] },
          (place: any, status: any) => {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
              setError('Unable to load reviews')
              return
            }
            const revs: Review[] = (place?.reviews || []).slice(0, maxReviews)
            setReviews(revs)
            setPlaceUrl(place?.url)
          }
        )
      } catch (e: any) {
        setError(e?.message || 'Failed to load Google API')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [apiKey, placeId, maxReviews])

  useEffect(() => {
    if (!reviews || reviews.length <= 1) return
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4000)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [reviews])

  const hasData = reviews && reviews.length > 0

  if (error && !hasData) {
    return (
      <div className="glass p-6 text-center">
        <p className="text-slate-600 dark:text-slate-300">Google reviews unavailable. Provide API key and Place ID to load.</p>
        {placeUrl && (
          <a className="mt-3 inline-flex btn-ghost" href={placeUrl} target="_blank" rel="noreferrer">View on Google</a>
        )}
      </div>
    )
  }

  if (!hasData) {
    return <div className="glass p-6 text-center">Loading Google reviews…</div>
  }

  const current = reviews![index]

  return (
    <div className="relative">
      <div className="card p-6 glass">
        <div className="flex items-start gap-4">
          <img
            src={current.profile_photo_url || 'https://maps.gstatic.com/tactile/omnibox/anonymous_person.png'}
            alt={current.author_name}
            className="h-10 w-10 rounded-full border border-black/10 dark:border-white/10 object-cover"
            loading="lazy"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{current.author_name}</div>
              <div className="text-xs text-slate-500">{current.relative_time_description}</div>
            </div>
            <div className="mt-1 flex items-center gap-1" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`${i < Math.round(current.rating) ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}>★</span>
              ))}
            </div>
            {current.text && (
              <p className="mt-3 text-slate-700 dark:text-slate-300">{current.text}</p>
            )}
            <div className="mt-4 text-xs text-slate-500">Powered by Google</div>
          </div>
        </div>
      </div>
      {reviews!.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {reviews!.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-brand-red' : 'bg-black/20 dark:bg-white/20'}`}
            />
          ))}
        </div>
      )}
      {placeUrl && (
        <div className="mt-4 text-center">
          <a href={placeUrl} target="_blank" rel="noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-red">Read all reviews on Google ↗</a>
        </div>
      )}
    </div>
  )
}

