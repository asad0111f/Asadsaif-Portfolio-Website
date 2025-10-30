import Card from './Card'
import Tag from './Tag'
import { Business } from '../data/site'

export default function BusinessCard({ b }: { b: Business }) {
  return (
    <Card className="p-6 hover:shadow-lg transition hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{b.name}</h3>
          <p className="text-sm text-slate-500">{b.tagline}</p>
        </div>
        <a className="text-brand-red text-sm" href={b.links.website} target="_blank" rel="noreferrer">Visit →</a>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{b.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {b.offerings.slice(0, 6).map((o) => (
          <Tag key={o} label={o} />
        ))}
      </div>
    </Card>
  )
}
