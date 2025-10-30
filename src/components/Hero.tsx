import Container from './Container'
import Button from './Button'
import { site } from '../data/site'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const fallback = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop'
  const candidates = useMemo(
    () => [
      site.owner.headshot,
      '/images/owner.svg',
      '/images/Owner.svg',
      '/images/owner.png',
      '/images/Owner.png',
      '/images/owner.webp',
      '/owner.png',
    ],
    []
  )
  const [idx, setIdx] = useState(0)
  const src = idx < candidates.length ? candidates[idx] : fallback
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full blur-3xl bg-brand-red/20"></div>
        <div className="absolute top-20 right-0 h-64 w-64 rounded-full blur-3xl bg-sky-500/10"></div>
      </div>
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-slate-500">{site.owner.location}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {site.owner.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Full stack developer and Google & Meta Certified Digital Marketer
          </p>
          {/* Photo removed on homepage per request */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to={site.cta.hero.primary.to} className="btn-primary">{site.cta.hero.primary.label}</Link>
            <Link to={site.cta.hero.secondary.to} className="btn-ghost">{site.cta.hero.secondary.label}</Link>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
