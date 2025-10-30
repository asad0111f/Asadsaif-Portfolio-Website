import { useParams, Link } from 'react-router-dom'
import { site } from '../data/site'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Tag from '../components/Tag'
import { SEO } from '../lib/seo'
import { creativesByProject, logosByProject } from '../data/creatives'
import ImageCarousel from '../components/ImageCarousel'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = site.projects.find((p) => p.slug === slug)
  if (!project) {
    return (
      <Section>
        <Container>
          <p>Project not found.</p>
        </Container>
      </Section>
    )
  }
  const displayTitle = project.slug === 'tranquility-compassion'
    ? 'Tranquillity Compassion (PSW Services)'
    : project.slug === 'isnad-association'
    ? 'Isnad Association (Non-Profit)'
    : project.title
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: displayTitle,
    description: project.summary,
    url: `${site.seo.siteUrl}/projects/${project.slug}`,
    image: project.image,
    author: { '@type': 'Person', name: site.owner.name }
  }
  return (
    <>
      <SEO title={displayTitle} description={project.summary} image={project.image} jsonLd={jsonLd} />
      <Section>
        <Container>
          <Link to="/projects" className="text-sm text-slate-500 hover:text-brand-red">← Back to Projects</Link>
          <div className="mt-4 grid lg:grid-cols-2 gap-6 items-start">
            <img src={project.image} alt="Cover" loading="lazy" className="rounded-2xl border border-black/5 dark:border-white/10" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold">{displayTitle}</h1>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => <Tag key={t} label={t} />)}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                {project.links.live && <a className="text-brand-red" href={project.links.live} target="_blank" rel="noreferrer">Live ↗</a>}
                {project.links.repo && <a className="text-slate-500 hover:text-brand-red" href={project.links.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {project.links.case && <a className="text-slate-500 hover:text-brand-red" href={project.links.case} target="_blank" rel="noreferrer">Case Study ↗</a>}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Design project specific sections: always visible */}
      {project.type === 'design' ? (
        <>
          {/* Client Logo */}
          <Section>
            <Container>
              <SectionHeading title="Client Logo" subtitle="Add the client's logo here." />
              {(() => {
                const logos = logosByProject[project.slug] || []
                if (logos.length > 0) {
                  if (logos.length === 1) {
                    const item = logos[0]
                    return (
                      <div className="mt-4 flex justify-start md:justify-center">
                        <figure className="w-full sm:w-2/3 lg:w-1/2 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                          <img
                            src={item.src}
                            alt={item.alt || 'Client logo'}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-48 object-contain p-6 bg-white/70 dark:bg-white/5"
                          />
                        </figure>
                      </div>
                    )
                  }
                  return (
                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {logos.map((item) => (
                        <figure key={item.src} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                          <img
                            src={item.src}
                            alt={item.alt || 'Client logo'}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-48 object-contain p-6 bg-white/70 dark:bg-white/5"
                          />
                        </figure>
                      ))}
                    </div>
                  )
                }
                return (
                  <div className="glass p-8 rounded-2xl border border-black/10 dark:border-white/10 text-center text-slate-600 dark:text-slate-300">
                    No logo added yet. Add a logo asset for this project to display it here.
                  </div>
                )
              })()}
            </Container>
          </Section>

          {/* Social Media Creatives */}
          <Section>
            <Container>
              <SectionHeading title="Social Media Creatives" subtitle="Ad creatives and social posts for this client." />
              {creativesByProject[project.slug] && creativesByProject[project.slug].length > 0 ? (
                <div className="mt-4">
                  <ImageCarousel items={creativesByProject[project.slug]} autoPlayMs={0} />
                </div>
              ) : (
                <div className="glass p-8 rounded-2xl border border-black/10 dark:border-white/10 text-center text-slate-600 dark:text-slate-300">
                  No creatives added yet. Add images to this project to showcase social creatives.
                </div>
              )}
            </Container>
          </Section>
        </>
      ) : (
        // For non-design projects, keep prior behavior and show creatives only when provided
        creativesByProject[project.slug] && creativesByProject[project.slug].length > 0 && (
          <Section>
            <Container>
              <SectionHeading title="Creatives" subtitle="Selected creatives designed for this project." />
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {creativesByProject[project.slug].map((item) => (
                  <figure key={item.src} className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                    <img
                      src={item.src}
                      alt={item.alt || 'Creative asset'}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-56 object-cover img-smooth loaded"
                    />
                  </figure>
                ))}
              </div>
            </Container>
          </Section>
        )
      )}
    </>
  )
}
