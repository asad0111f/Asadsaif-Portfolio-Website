import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import { site } from '../data/site'
import { SEO } from '../lib/seo'

export default function Services() {
  return (
    <>
      <SEO title="Services" />
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.04] p-6 sm:p-10 shadow-sm">
            <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-brand-red/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative max-w-5xl mx-auto">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Our Services</h2>
              <p className="mt-2 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Strategy, design and development — premium, fast, and effective.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {site.services.map((s) => (
                  <ServiceCard key={s.slug} s={s} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Media Platforms */}
      <Section>
        <Container>
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Social Media</span> Platforms</h3>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between gap-6 md:gap-10 flex-nowrap overflow-x-auto md:overflow-visible px-1 py-1 snap-x md:snap-none snap-mandatory">
              {[
                { label: 'Facebook', src: '/logos/facebook.svg' },
                { label: 'Instagram', src: '/logos/instagram.svg' },
                { label: 'Twitter', src: '/logos/twitter.svg' },
                { label: 'LinkedIn', src: '/logos/linkedin.svg' },
                { label: 'TikTok', src: '/logos/tiktok.svg' },
                { label: 'Nextdoor', src: '/logos/nextdoor.svg' },
                { label: 'Google', src: '/logos/google.svg' },
              ].map(({ label, src }) => (
                <div key={label} className="shrink-0 md:shrink snap-center md:snap-none flex flex-col items-center gap-2">
                  <img src={src} alt={label} loading="lazy" className="h-10 w-10" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Projects */}
      <Section>
        <Container>
          <SectionHeading title="Projects" subtitle="A few recent projects." />
          <div className="grid md:grid-cols-3 gap-6">
            {(() => {
              const slugs = ['apply-buddies', 'canine-support-services', 'limo-4-all']
              const chosen = slugs
                .map((slug) => site.projects.find((p) => p.slug === slug))
                .filter((p): p is typeof site.projects[number] => Boolean(p))
              // Fallback if any are missing: fill from non-mock projects
              if (chosen.length < 3) {
                const exclude = new Set(['commerce-next', 'fitness-mobile', 'saas-dashboard'])
                const fillers = site.projects.filter((p) => !exclude.has(p.slug) && !slugs.includes(p.slug))
                while (chosen.length < 3 && fillers[chosen.length - slugs.length]) {
                  chosen.push(fillers[chosen.length - slugs.length])
                }
              }
              return chosen.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)
            })()}
          </div>
        </Container>
      </Section>

      {/* Our Tech Stack — single responsive line */}
      <Section>
        <Container>
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Our</span> Tech Stack</h3>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between gap-6 md:gap-10 flex-nowrap overflow-x-auto md:overflow-visible px-1 py-1 snap-x md:snap-none snap-mandatory">
              {[
                { label: 'React', src: '/logos/react.svg' },
                { label: 'TypeScript', src: '/logos/typescript.svg' },
                { label: 'Tailwind', src: '/logos/tailwind.svg' },
                { label: 'Vite', src: '/logos/vite.svg' },
                { label: 'Framer', src: '/logos/framer.svg' },
                { label: 'Firebase', src: '/logos/firebase.svg' },
                { label: 'Node.js', src: '/logos/node.svg' },
                { label: 'Stripe', src: '/logos/stripe.svg' },
              ].map(({ label, src }) => (
                <div key={label} className="shrink-0 md:shrink snap-center md:snap-none flex flex-col items-center gap-2">
                  <img src={src} alt={label} loading="lazy" className="h-10 w-10" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
