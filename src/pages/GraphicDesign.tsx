import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import ServiceCard from '../components/ServiceCard'
import ImageCarousel, { type CarouselItem } from '../components/ImageCarousel'
import { site } from '../data/site'
import { SEO } from '../lib/seo'
import { Link } from 'react-router-dom'

type DesignItem = {
  title: string
  client: string
  image: string
}

const designs: DesignItem[] = [
  {
    title: 'Social Creatives- Canine Support Services',
    client: 'Canine Support Services',
    image: '/graphics/thumbs/Social Creatives- Canine Support Services.jpg'
  },
  {
    title: 'Social Creatives-Travel Vista',
    client: 'Travel Vista',
    image: '/graphics/thumbs/Social Creatives-Travel Vista.jpg'
  },
]

// Simple galleries you can extend by adding more image paths.
// Drop additional JPG/PNG/WebP files in `public/graphics/thumbs/` or
// `public/graphics/` and add the web paths here.
const canineCreatives: string[] = [
  '/graphics/thumbs/Social Creatives- Canine Support Services.jpg',
]

const travelVistaCreatives: string[] = [
  '/graphics/thumbs/Social Creatives-Travel Vista.jpg',
]

// Optional: add your logo designs here (drop files into public/graphics/ or thumbs)
// Example: '/graphics/logos/your-logo.png'
const logoDesigns: string[] = []

// Creatives carousel demo: prefilled with two existing items.
// Replace or extend as you add more creatives.
const socialCreatives: CarouselItem[] = [
  { src: '/graphics/thumbs/Social Creatives- Canine Support Services.jpg', alt: 'Social Creatives - Canine Support Services' },
  { src: '/graphics/thumbs/Social Creatives-Travel Vista.jpg', alt: 'Social Creatives - Travel Vista' },
]

const tools = [
  'Adobe Photoshop',
  'Illustrator',
  'InDesign',
  'Figma',
  'Canva',
  'Lightroom'
]

const expertise = [
  'Logos & brand identity',
  'Social media creatives',
  'Flyers, posters & menus',
  'Ad banners & carousels',
  'Business cards & stationery',
  'Print-ready exports and mockups'
]

export default function GraphicDesign() {
  return (
    <>
      <SEO title="Graphic Designing" />

      {/* Breadcrumbs */}
      <Section>
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <ol className="flex gap-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/projects" className="hover:text-brand-red">Portfolio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-900 dark:text-slate-100">Graphic Designing</li>
            </ol>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section>
        <Container>
          <SectionHeading
            title="Graphic Designing"
            subtitle="A selection of creatives designed for clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((d) => (
              <figure key={d.title} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-56 object-cover img-smooth loaded"
                />
                <figcaption className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{d.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{d.client}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* Logo Designs section */}
      <Section>
        <Container>
          <SectionHeading title="Logo Designs" subtitle="Selected logo marks and brand assets" />
          {logoDesigns.length === 0 ? (
            <div className="glass p-8 rounded-2xl border border-black/10 dark:border-white/10 text-center text-slate-600 dark:text-slate-300">
              No logos added yet. Add file paths to <code>logoDesigns</code> to showcase your logos here.
            </div>
          ) : (
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {logoDesigns.map((src) => (
                <figure key={src} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                  <img
                    src={src}
                    alt="Logo design"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 object-contain p-6 bg-white/70 dark:bg-white/5"
                  />
                </figure>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Creatives Carousel */}
      <Section>
        <Container>
          <SectionHeading title="Creatives Carousel" subtitle="Swipe through multiple social creatives" />
          <ImageCarousel items={socialCreatives} autoPlayMs={0} />
        </Container>
      </Section>

      {/* Social Creatives Galleries */}
      <Section>
        <Container>
          <SectionHeading title="Social Creatives- Canine Support Services" subtitle="Best-performing creatives" />
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {canineCreatives.map((src) => (
              <figure key={src} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <img
                  src={src}
                  alt="Social Creatives- Canine Support Services"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover img-smooth loaded"
                />
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Social Creatives-Travel Vista" subtitle="Best-performing creatives" />
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelVistaCreatives.map((src) => (
              <figure key={src} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <img
                  src={src}
                  alt="Social Creatives-Travel Vista"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover img-smooth loaded"
                />
              </figure>
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
