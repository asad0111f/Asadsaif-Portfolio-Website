import { useMemo, useState } from 'react'
import Container from './Container'
import Section from './Section'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { site, Project } from '../data/site'

const HIDDEN_SLUGS = new Set<string>([
  'commerce-next',
  'fitness-mobile',
  'saas-dashboard',
  'local-seo',
  'events-app',
  'fintech-wallet',
  'food-delivery',
  // Hide mock portfolio items that were replaced
  'reel-local-eatery',
  'promo-fitness-studio',
  'identity-cafe',
  'poster-city-fest',
])

const filters = ['All', 'Web', 'Mobile', 'Fullstack', 'Video Editing', 'Graphic Design'] as const

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const filtered = useMemo(() => {
    let items = site.projects.filter((p) => !HIDDEN_SLUGS.has(p.slug))
    if (active !== 'All') {
      const map: Record<string, Project['type']> = {
        Web: 'web',
        Mobile: 'mobile',
        Fullstack: 'fullstack',
        'Video Editing': 'video',
        'Graphic Design': 'design',
      }
      const match = map[active]
      items = items.filter((p) => p.type === match)
    }
    return limit ? items.slice(0, limit) : items
  }, [active, limit])

  return (
    <Section id="projects">
      <Container>
        <div className="mb-4">
          <SectionHeading title="Featured Projects" subtitle="A selection of web and mobile work." />
          <div className="mt-2 flex justify-center">
            <div role="tablist" aria-label="Project filters" className="inline-flex rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-1 shadow-sm">
              {filters.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => setActive(f)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition ${
                    active === f
                      ? 'bg-brand-red text-white shadow-glow'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
