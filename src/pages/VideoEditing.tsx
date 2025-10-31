import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import ServiceCard from '../components/ServiceCard'
import { site } from '../data/site'
import { SEO } from '../lib/seo'
import { Link } from 'react-router-dom'

type VideoItem = {
  title: string
  business: string
  embedUrl: string
}

const videos: VideoItem[] = [
  // Canine Support Services (YouTube Shorts)
  {
    title: 'Promo - Canine Support Services (1)',
    business: 'Canine Support Services',
    embedUrl: 'https://www.youtube-nocookie.com/embed/FKzYpHAscYE?rel=0&modestbranding=1&playsinline=1'
  },
  {
    title: 'Promo - Canine Support Services (2)',
    business: 'Canine Support Services',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ntMIfyXVPHg?rel=0&modestbranding=1&playsinline=1'
  },
  {
    title: 'Promo - Canine Support Services (3)',
    business: 'Canine Support Services',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dCxg3iTJEGY?rel=0&modestbranding=1&playsinline=1'
  },
  {
    title: 'Promo - Canine Support Services (4)',
    business: 'Canine Support Services',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Sg1xzTP8EC0?rel=0&modestbranding=1&playsinline=1'
  },
  // Brand Reel - Travel Visa (YouTube Shorts)
  {
    title: 'Brand Reel - Travel Visa (1)',
    business: 'Travel Visa',
    embedUrl: 'https://www.youtube-nocookie.com/embed/q7iGMxPbnAA?rel=0&modestbranding=1&playsinline=1'
  },
  {
    title: 'Brand Reel - Travel Visa (2)',
    business: 'Travel Visa',
    embedUrl: 'https://www.youtube-nocookie.com/embed/2M_Vlo4shEg?rel=0&modestbranding=1&playsinline=1'
  },
]

const tools = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'CapCut',
  'Adobe Audition',
  'Photoshop'
]

const expertise = [
  'Short-form reels (15-60s)',
  'Storyboarding and pacing',
  'Color correction & grading',
  'Sound design and mixing',
  'Captions, motion graphics & LUTs',
  'Platform-specific exports (IG, TikTok, YT)'
]

export default function VideoEditing() {
  return (
    <>
      <SEO title="Video Editing" />

      {/* Breadcrumbs */}
      <Section>
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <ol className="flex gap-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/projects" className="hover:text-brand-red">Portfolio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-900 dark:text-slate-100">Video Editing</li>
            </ol>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section>
        <Container>
          <SectionHeading
            title="Video Editing"
            subtitle="Highlights from edits delivered for different businesses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.title} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{v.business}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tools & Expertise */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-extrabold mb-3">
                <span className="text-brand-red">Tools</span> I Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-extrabold mb-3">
                <span className="text-brand-red">Expertise</span>
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                {expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <SectionHeading title="Services" subtitle="Explore related services and packages." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.services.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
