import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'
import { SEO } from '../lib/seo'
import { useMemo, useState } from 'react'

export default function About() {
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
    <>
      <SEO title="About" />
      <Section>
        <Container>
          <SectionHeading title="About" subtitle="Let,s talk about your project" />
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <img
              src={`${src}?v=1`}
              onError={() => setIdx((i) => i + 1)}
              alt={site.owner.name}
              loading="lazy"
              decoding="async"
              className="rounded-3xl w-full h-auto border border-black/5 dark:border-white/10 object-cover"
            />
            <div className="lg:col-span-2 space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I’m a full‑stack developer and founder based in {site.owner.location}. I help businesses ship
                fast, performant products with clean design, thoughtful UX, and measurable outcomes.
              </p>
              <p>
                My mission is to partner with ambitious teams to build modern web & mobile experiences that
                convert and scale. I value clarity, speed, and craft.
              </p>
              <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
