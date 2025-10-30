import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

type Props = {
  serviceSlug: string
  title: string
  price: string
  subtitle?: string
  features: string[]
  highlight?: boolean
}

export default function PricingCard({ serviceSlug, title, price, subtitle, features, highlight }: Props) {
  return (
    <div className={`relative rounded-2xl border bg-white/80 dark:bg-white/5 border-black/10 dark:border-white/10 shadow-sm overflow-hidden ${highlight ? 'ring-1 ring-brand-red/40' : ''}`}>
      {highlight && (
        <div className="absolute top-2 right-2 z-10 text-[11px] tracking-wide bg-brand-red text-white px-2 py-1 rounded-md shadow">
          MOST POPULAR
        </div>
      )}
      <div className={`p-5 ${highlight ? 'pt-7' : ''}`}>
        <div className="text-slate-900 dark:text-slate-100 font-semibold">{title}</div>
        <div className="mt-1 text-2xl font-extrabold">{price}</div>
        {subtitle && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>}
        <hr className="my-4 border-black/10 dark:border-white/10" />
        <div>
          <div className="text-sm font-medium">Key Features</div>
          <ul className="mt-2 space-y-2 text-sm">
            {features.map((f, i) => (
              <li key={i} className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="mt-0.5 text-brand-red" />
                <span className="text-slate-700 dark:text-slate-300">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-5 pb-5">
        <Link to={`/contact?service=${encodeURIComponent(serviceSlug)}`} className="w-full btn-ghost">Get Started</Link>
      </div>
    </div>
  )
}
