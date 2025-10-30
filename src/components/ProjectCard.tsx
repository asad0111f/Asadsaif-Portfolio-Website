import Card from './Card'
import Tag from './Tag'
import { Link } from 'react-router-dom'
import { Project } from '../data/site'
import { motion } from 'framer-motion'
import { useState } from 'react'

function displayTitle(p: Project) {
  if (p.slug === 'tranquility-compassion') return 'Tranquillity Compassion (PSW Services)'
  if (p.slug === 'isnad-association') return 'Isnad Association (Non-Profit)'
  return p.title
}

export default function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
      <Link to={`/projects/${p.slug}`} aria-label={`Open ${displayTitle(p)}`} className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 rounded-2xl">
        <Card className="overflow-hidden hover:shadow-lg transition">
          <div className="relative h-48 overflow-hidden">
            <div className={`absolute inset-0 rounded-none ${loaded ? 'hidden' : 'skeleton'}`} />
            <img
              src={p.image}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              onLoad={() => setLoaded(true)}
              alt={displayTitle(p)}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${loaded ? 'img-smooth loaded' : 'img-smooth'}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{displayTitle(p)}</h3>
              <span className="text-xs text-slate-500">{p.year}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.slice(0, 4).map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.links.live && (
                <a className="text-brand-red" href={p.links.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">Live</a>
              )}
              {p.links.repo && (
                <a className="text-slate-500 hover:text-brand-red" href={p.links.repo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {p.links.case && (
                <a className="text-slate-500 hover:text-brand-red" href={p.links.case} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">Case</a>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
