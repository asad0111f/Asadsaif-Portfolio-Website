import Card from './Card'
import { Service } from '../data/site'
import { Megaphone, Code, Smartphone, BarChart3, Images, Globe, Search, Palette, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const iconFor = (slug: string) => {
  switch (slug) {
    case 'social-media-management':
      return Megaphone
    case 'custom-web-development':
      return Code
    case 'mobile-app-development':
      return Smartphone
    case 'google-meta-ads':
      return BarChart3
    case 'social-media-content':
      return Images
    case 'wordpress-development':
      return Globe
    case 'seo':
      return Search
    case 'graphic-design':
      return Palette
    default:
      return Code
  }
}

export default function ServiceCard({ s }: { s: Service }) {
  const Icon = iconFor(s.slug)
  return (
    <Link to={`/services/${s.slug}`} aria-label={s.title} className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 rounded-2xl">
      <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <Card className="relative p-0 overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-lg transition">
          {/* Accent top bar for contrast */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red/80 via-brand-red/40 to-transparent" aria-hidden="true" />

          {/* Soft gradient background that intensifies on hover */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-brand-red/15 blur-3xl opacity-60 group-hover:opacity-90 transition" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl opacity-60 group-hover:opacity-90 transition" aria-hidden="true" />

          <div className="relative p-6 flex flex-col items-center text-center min-h-[220px]">
            <span className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red/15 via-white/40 to-transparent dark:via-white/5 text-brand-red ring-1 ring-brand-red/20 transition-transform duration-300 group-hover:scale-110">
              <Icon size={34} />
            </span>
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              {s.title}
            </h3>
          </div>
          <div className="relative border-t border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <div className="flex items-center justify-center gap-2 py-3 text-sm text-slate-700 dark:text-slate-300 transition-colors group-hover:text-brand-red">
              Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
            {/* Hover progress underline */}
            <div className="pointer-events-none absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-brand-red to-pink-600 group-hover:w-full transition-all duration-300" />
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}
