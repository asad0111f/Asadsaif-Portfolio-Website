import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import ProjectsGrid from '../components/ProjectsGrid'
import ServiceCard from '../components/ServiceCard'
import { site } from '../data/site'
import { Link } from 'react-router-dom'
import ManualReviewsCarousel from '../components/ManualReviewsCarousel'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import { SEO } from '../lib/seo'

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Highlights />
      
      {/* Services preview above Featured Projects */}
      <Section id="home-services">
        <Container>
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {site.services.slice(0, 4).map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/services" className="btn-primary">All Services</Link>
          </div>
        </Container>
      </Section>
      <ProjectsGrid limit={6} />
      <Section>
        <Container>
          <div className="text-center">
            <Link to="/projects" className="btn-primary">All Projects</Link>
          </div>
        </Container>
      </Section>
      {/* Social platforms moved to above reviews */}
      <Section>
        <Container>
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Social Media</span> Platforms</h3>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10 overflow-visible px-1 py-1">
              {[
                { label: 'Facebook', src: '/logos/facebook.svg' },
                { label: 'Instagram', src: '/logos/instagram.svg' },
                { label: 'Twitter', src: '/logos/twitter.svg' },
                { label: 'LinkedIn', src: '/logos/linkedin.svg' },
                { label: 'TikTok', src: '/logos/tiktok.svg' },
                { label: 'Nextdoor', src: '/logos/nextdoor.svg' },
                { label: 'Google', src: '/logos/google.svg' },
              ].map(({ label, src }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <img src={src} alt={label} loading="lazy" className="h-10 w-10" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Google Reviews</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Real reviews directly from Google Maps.</p>
          </div>
          <ManualReviewsCarousel />
        </Container>
      </Section>
      {/* Our Tech Stack — single responsive line (same as services) */}
      <Section>
        <Container>
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Our</span> Tech Stack</h3>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10 overflow-visible px-1 py-1">
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
                <div key={label} className="flex flex-col items-center gap-2">
                  <img src={src} alt={label} loading="lazy" className="h-10 w-10" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="glass p-8 text-center rounded-2xl">
            <h3 className="text-xl font-semibold">Have a project in mind?</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Let’s build something great together.</p>
            <div className="mt-4">
              <a href="/contact" className="btn-primary">Get in touch</a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
