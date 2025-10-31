import { useParams, Link } from 'react-router-dom'
import { site } from '../data/site'
import Section from '../components/Section'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import PricingCard from '../components/PricingCard'
import { SEO } from '../lib/seo'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = site.services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <Section>
        <Container>
          <p>Service not found. <Link to="/services" className="text-brand-red">View all services</Link></p>
        </Container>
      </Section>
    )
  }

  const breadcrumbJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.seo.siteUrl + '/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: site.seo.siteUrl + '/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: site.seo.siteUrl + '/services/' + service.slug }
    ]
  }
  const serviceJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Person', name: site.owner.name, url: site.seo.siteUrl },
    areaServed: 'Hamilton, Ontario'
  }
  return (
    <>
      <SEO title={service.title} description={service.description} jsonLd={[breadcrumbJson, serviceJson]} />
      {/* Hero heading */}
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-brand-red">{service.title.split(' ')[0]}</span>{' '}
              {service.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{service.description}</p>
          </div>
        </Container>
      </Section>

      {/* Packages */}
      <Section>
        <Container>
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              {service.slug === 'social-media-management' ? (
                <><span className="text-brand-red">Social Media</span> Packages</>
              ) : service.slug === 'mobile-app-development' ? (
                <><span className="text-brand-red">Development</span> Packages</>
              ) : service.slug === 'google-meta-ads' ? (
                <><span className="text-brand-red">Advertising</span> Packages</>
              ) : service.slug === 'social-media-content' ? (
                <><span className="text-brand-red">Content</span> Packages</>
              ) : service.slug === 'wordpress-development' ? (
                <><span className="text-brand-red">WordPress</span> Packages</>
              ) : service.slug === 'graphic-design' ? (
                <><span className="text-brand-red">Graphic Designing</span> Packages</>
              ) : service.slug === 'seo' ? (
                <><span className="text-brand-red">SEO</span> Packages</>
              ) : (
                <><span className="text-brand-red">Custom</span> {service.title.split(' ').slice(-1)} Packages</>
              )}
            </h2>
          </div>
          {service.slug === 'social-media-management' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter Social Package"
                price="$99/month"
                subtitle="Small businesses starting with social media"
                features={[
                  '10 Posts / month',
                  '2 Reels / month (15–60 seconds)',
                  '1–2 social media platforms',
                  'Basic caption writing',
                  'Hashtag research',
                  'Branded content calendar',
                  'Monthly performance report',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Growth Social Suite"
                price="$149/month"
                subtitle="Businesses scaling their social presence"
                highlight
                features={[
                  '20 Posts / month',
                  '4 Reels / month (15–60 seconds)',
                  'Up to 3 social media platforms',
                  'Custom caption writing',
                  'Hashtag & trend research',
                  'Bi‑weekly performance reports',
                  'Content scheduling',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise Social Solution"
                price="$199/month"
                subtitle="Businesses with comprehensive social needs"
                features={[
                  '30 Posts / month',
                  '6 Reels / month (15–60 seconds)',
                  'Up to 4 social media platforms',
                  'Advanced caption writing',
                  'High‑quality visuals (posts + reels)',
                  'Branded content calendar',
                  'Weekly performance reports',
                ]}
              />
            </div>
          ) : service.slug === 'mobile-app-development' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter App Solution"
                price="$1,499"
                subtitle="Small businesses or startups needing a basic app"
                features={[
                  'Single platform (iOS OR Android)',
                  'Basic UI/UX design',
                  'Up to 5 core features',
                  'Standard performance optimization',
                  'Basic testing & QA',
                  '1 round of revisions',
                  'App store submission assistance',
                  '1 month support for bugs',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Premium App Solution"
                price="$2,499"
                subtitle="Growing businesses needing a professional app"
                highlight
                features={[
                  'Cross-platform (iOS AND Android)',
                  'Custom UI/UX design',
                  'Up to 10 core features',
                  'API integration',
                  'Advanced performance optimization',
                  'Comprehensive testing & QA',
                  '3 rounds of revisions',
                  '3 months ongoing support',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise App Solution"
                price="Contact Only"
                subtitle="Large/complex apps with advanced requirements"
                features={[
                  'Cross-platform development',
                  'Premium custom UI/UX design',
                  'Unlimited features',
                  'Backend development',
                  'Advanced security features',
                  'Enterprise-grade testing',
                  'Unlimited revisions',
                  '6 months ongoing support',
                ]}
              />
            </div>
          ) : service.slug === 'seo' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="SEO Audit & Strategy"
                price="$499/month"
                subtitle="Businesses needing a comprehensive SEO roadmap"
                features={[
                  'Full technical SEO audit',
                  'Competitor analysis (3 competitors)',
                  'Keyword research (50+ keywords)',
                  'Content gap analysis',
                  'On-page optimization recommendations',
                  'Technical SEO recommendations',
                  'Local SEO audit (if applicable)',
                  'Custom SEO strategy report',
                  'Priority fixes checklist',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="SEO Growth Package"
                price="$1,499/month"
                subtitle="Businesses wanting consistent organic growth"
                highlight
                features={[
                  'Ongoing technical SEO optimizations',
                  'Monthly keyword research updates',
                  'On-page optimizations (10+ pages/month)',
                  'Content strategy development',
                  'Monthly performance reporting',
                  'Backlink analysis & strategy',
                  'Local SEO support (if applicable)',
                  'Schema markup implementation',
                  'Monthly strategy calls',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise SEO Solution"
                price="Contact Now"
                subtitle="Large businesses with complex SEO needs"
                features={[
                  'Comprehensive technical SEO management',
                  'Unlimited on-page optimizations',
                  'Advanced content strategy',
                  'Competitor monitoring & analysis',
                  'Weekly performance reporting',
                  'Premium backlink building',
                  'International SEO strategy',
                  'E‑commerce SEO (if applicable)',
                  'Advanced schema implementations',
                  '24/7 monitoring & alerts',
                  'Dedicated SEO specialist',
                ]}
              />
            </div>
          ) : service.slug === 'graphic-design' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Basic Design Package"
                price="$149"
                subtitle="Startups and small businesses needing essential designs"
                features={[
                  'Logo Design (2 concepts)',
                  'Business Card Design',
                  'Social Media Banner (1 platform)',
                  'Basic Color Palette',
                  '1 Round of Revisions',
                  'Standard Delivery (5–7 days)',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Standard Design Package"
                price="$199"
                subtitle="Growing businesses needing complete branding materials"
                highlight
                features={[
                  'Logo Design (3 concepts)',
                  'Full Stationery Set (Cards, letterhead)',
                  'Social Media Kit (3 platforms)',
                  'Brochure/Flyer Design (2 pages)',
                  '3 Rounds of Revisions',
                  'Priority Delivery (3–5 days)',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Premium Design Package"
                price="$499"
                subtitle="Established companies needing full design solutions"
                features={[
                  'Logo with Variations (4 concepts)',
                  'Stationery + Email Signature',
                  'Social Media Kit (5 platforms)',
                  'Marketing Collateral (Brochures, posters)',
                  'Unlimited Revisions',
                  'Express Delivery (2–3 days)',
                ]}
              />
            </div>
          ) : service.slug === 'google-meta-ads' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter Ads Suite"
                price="$99/mo + 5% comm."
                subtitle="Small businesses starting with digital advertising"
                features={[
                  '1 platform (Google OR Meta)',
                  '3 ad creatives per month',
                  '1 campaign structure',
                  'Basic audience targeting',
                  'Monthly performance report',
                  'Ad copywriting & optimization',
                  'Weekly monitoring',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Growth Ads Suite"
                price="$199/mo + 5% comm."
                subtitle="Businesses scaling their digital advertising"
                highlight
                features={[
                  '2 platforms (Google AND Meta)',
                  '5 ad creatives per month',
                  '3 campaign structures',
                  'Advanced audience targeting',
                  'Bi-weekly performance reports',
                  'A/B testing of creatives',
                  'Conversion tracking setup',
                  'Daily monitoring',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise Ads Suite"
                price="Contact Now"
                subtitle="Large businesses with complex advertising needs"
                features={[
                  'Multi-platform (Google, Meta, LinkedIn, etc.)',
                  'Unlimited ad creatives',
                  'Custom campaign structures',
                  'AI-powered audience targeting',
                  'Weekly performance deep dives',
                  'Full-funnel strategy',
                  'Landing page optimization',
                  '24/7 monitoring & optimization',
                ]}
              />
            </div>
          ) : service.slug === 'social-media-content' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter Social Package"
                price="$249/month"
                subtitle="Small businesses starting social media presence"
                features={[
                  '10 custom posts per month',
                  'Up to 3 social media platforms',
                  'On‑site photos/videos — No AI',
                  'Basic post scheduling',
                  'Content strategy session',
                  '1 round of revisions',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Growth Social Suite"
                price="$349/month"
                subtitle="Consistent, engaging content for growing brands"
                highlight
                features={[
                  '20 custom posts per month',
                  '10 short‑form reels (filmed on‑site — No AI)',
                  'Up to 5 social media platforms',
                  'Professional content calendar & posting',
                  'Hashtag research and caption writing',
                  'Monthly performance insights',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise Social Solution"
                price="$499/month"
                subtitle="Full‑service social content management"
                features={[
                  '30 custom posts per month',
                  '15 reels (professionally shot on‑site — No AI)',
                  'Unlimited social media platforms',
                  'Complete content strategy & management',
                  'Advanced analytics & optimization',
                  'Priority support and custom campaigns',
                ]}
              />
            </div>
          ) : service.slug === 'wordpress-development' ? (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter Site"
                price="$349"
                subtitle="Small businesses or bloggers needing a simple WordPress site"
                features={[
                  '4–5 standard pages',
                  'Premium theme installation',
                  '1 design revision',
                  '10 business day delivery',
                  'Mobile-responsive design',
                  'Basic SEO setup',
                  '1-month technical support',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Business Site"
                price="$649"
                subtitle="Growing businesses needing professional WordPress solutions"
                highlight
                features={[
                  '7–10 custom pages',
                  'Custom theme development',
                  '3 design revisions',
                  '15 business day delivery',
                  'Advanced SEO optimization',
                  'Essential plugins (security, caching)',
                  '3-month support',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="WordPress E-Commerce"
                price="$1,199"
                subtitle="Online stores and businesses needing WooCommerce solutions"
                features={[
                  '10–15 custom pages',
                  'WooCommerce integration',
                  '5+ design revisions',
                  'Custom payment gateway setup',
                  'Product catalog setup',
                  'Ongoing SEO strategy',
                  '6-month premium support',
                ]}
              />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                serviceSlug={service.slug}
                title="Starter"
                price="$499"
                subtitle="Small businesses needing a clean, modern site"
                features={[
                  'Up to 5 custom-designed pages',
                  '1 design revision',
                  '10 business day delivery',
                  'Mobile-responsive design',
                  'Basic SEO setup',
                  'Contact form',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Business"
                price="$799"
                subtitle="Complex needs with extra functionality"
                highlight
                features={[
                  '8–10 pages',
                  '3 design revisions',
                  '15 business day delivery',
                  'Custom components',
                  'API integrations',
                  'Performance optimization',
                  '3‑month support',
                ]}
              />
              <PricingCard
                serviceSlug={service.slug}
                title="Enterprise"
                price="Contact Only"
                subtitle="Apps, web apps, or large projects"
                features={[
                  'Unlimited pages/modules',
                  'Unlimited design revisions',
                  'Flexible timeline',
                  'Custom backend integrations',
                  'Database integration',
                  'Ongoing SEO strategy',
                  '6‑month premium support',
                ]}
              />
            </div>
          )}
        </Container>
      </Section>

      {(service.slug === 'social-media-management' || service.slug === 'google-meta-ads') && (
        <Section>
          <Container>
            <div className="text-center mb-4">
              {service.slug === 'google-meta-ads' ? (
                <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Advertising</span> Platforms</h3>
              ) : (
                <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Social Media</span> Platforms</h3>
              )}
            </div>
            <div className="relative">
              <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between gap-6 md:gap-10 flex-nowrap overflow-x-auto md:overflow-visible px-1 py-1 snap-x md:snap-none snap-mandatory">
                {(service.slug === 'google-meta-ads'
                  ? [
                      { label: 'Google Ads', src: '/logos/google.svg' },
                      { label: 'Meta Ads', src: '/logos/meta.svg' },
                      { label: 'LinkedIn Ads', src: '/logos/linkedin.svg' },
                      { label: 'TikTok Ads', src: '/logos/tiktok.svg' },
                      { label: 'YouTube Ads', src: '/logos/youtube.svg' },
                    ]
                  : [
                      { label: 'Facebook', src: '/logos/facebook.svg' },
                      { label: 'Instagram', src: '/logos/instagram.svg' },
                      { label: 'Twitter', src: '/logos/twitter.svg' },
                      { label: 'LinkedIn', src: '/logos/linkedin.svg' },
                      { label: 'TikTok', src: '/logos/tiktok.svg' },
                      { label: 'Nextdoor', src: '/logos/nextdoor.svg' },
                      { label: 'Google', src: '/logos/google.svg' },
                    ]
                ).map(({ label, src }) => (
                  <div key={label} className="shrink-0 md:shrink snap-center md:snap-none flex flex-col items-center gap-2">
                    <img src={src} alt={label} loading="lazy" className="h-10 w-10" />
                    <span className="text-xs text-slate-600 dark:text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
        </Container>
      </Section>
      )}

      {service.slug === 'seo' && (
        <>
          <Section>
            <Container>
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Our SEO</span> Methodology</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card p-5">
                  <div className="font-semibold">Technical Optimization</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">We fix technical issues that prevent search engines from properly crawling and indexing your site.</p>
                </div>
                <div className="card p-5">
                  <div className="font-semibold">Content Strategy</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Data‑driven content planning that targets the right keywords and satisfies search intent.</p>
                </div>
                <div className="card p-5">
                  <div className="font-semibold">Performance Analytics</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">We track rankings, traffic, and conversions to continuously optimize your SEO strategy.</p>
                </div>
                <div className="card p-5">
                  <div className="font-semibold">Local SEO</div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Optimizing for local search results to drive more foot traffic and local customers.</p>
                </div>
              </div>
            </Container>
          </Section>

          <Section>
            <Container>
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">SEO</span> Focus Areas</h3>
              </div>
              <div className="relative">
                <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between gap-4 md:gap-8 flex-nowrap overflow-x-auto md:overflow-visible px-1 py-1 snap-x md:snap-none snap-mandatory">
                  {['On‑Page SEO','Technical SEO','Content Strategy','Local SEO','E‑commerce SEO'].map((label) => (
                    <span key={label} className="shrink-0 snap-center px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 text-sm">{label}</span>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        </>
      )}

      {service.slug === 'graphic-design' && (
        <Section>
          <Container>
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold">Don't need a <span className="text-brand-red">Package</span></h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Logo Design',
                'Business Card Design',
                'Letterhead Design',
                'Email Signature Design',
                'Flyer/Pamphalet Design',
                'Brochure Design',
                'Poster Design',
              ].map((title) => (
                <div key={title} className="card p-5">
                  <div className="font-semibold mb-1">{title}</div>
                  <div className="text-xs text-slate-500">Pricing</div>
                  <div className="mt-2">
                    <select className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 px-2 py-2 text-sm">
                      <option>Select an option</option>
                      <option>$70 - 2 Concepts</option>
                      <option>$99 - 3 Concepts</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <Link to={`/contact?service=${encodeURIComponent(service.slug)}&item=${encodeURIComponent(title)}`} className="w-full btn-ghost bg-brand-red text-white hover:brightness-110">Get Started</Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {service.slug === 'mobile-app-development' && (
        <Section>
          <Container>
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Development</span> Technologies</h3>
            </div>
            <div className="relative">
              <div className="mx-auto max-w-5xl flex items-center justify-center md:justify-between gap-6 md:gap-10 flex-nowrap overflow-x-auto md:overflow-visible px-1 py-1 snap-x md:snap-none snap-mandatory">
                {[
                  { label: 'React Native', src: '/logos/react.svg' },
                  { label: 'Flutter', src: '/logos/flutter.svg' },
                  { label: 'Swift', src: '/logos/swift.svg' },
                  { label: 'Kotlin', src: '/logos/kotlin.svg' },
                  { label: 'Firebase', src: '/logos/firebase.svg' },
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
      )}

      {/* Tech Stack (hidden on Mobile App Development page) */}
      {service.slug !== 'mobile-app-development' && (
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
      )}

      {/* Related Projects */}
      <Section>
        <Container>
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold"><span className="text-brand-red">Related</span> Projects</h3>
            <p className="text-slate-600 dark:text-slate-300">Where creativity meets execution</p>
          </div>
            <div className="grid md:grid-cols-3 gap-6">
              {(() => {
                // For Social services, show specific video/graphic projects
                if (service.slug === 'social-media-management' || service.slug === 'social-media-content' || service.slug === 'graphic-design') {
                  const slugs = [
                    'canine-support-services-video',
                    'travel-visa-video',
                    'canine-support-services-design',
                    'travel-visa-design',
                  ]
                  const related = slugs
                    .map((slug) => site.projects.find((p) => p.slug === slug))
                    .filter((p): p is typeof site.projects[number] => Boolean(p))
                  return related.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)
                }

                // Default curated list (excludes mockups)
                const exclude = new Set(['commerce-next', 'fitness-mobile', 'saas-dashboard'])
                const preferredOrder = [
                  'apply-buddies',
                  'sp-towing',
                  'limo-4-all',
                  'gravity-contractors',
                  'tranquility-compassion',
                  'isnad-association',
                  'greypro',
                  'bansal-auto-garage',
                  'canine-support-services',
                ]
                const preferred = preferredOrder
                  .map((slug) => site.projects.find((p) => p.slug === slug))
                  .filter((p): p is typeof site.projects[number] => Boolean(p))
                const others = site.projects.filter((p) => !exclude.has(p.slug) && !preferredOrder.includes(p.slug))
                const related = [...preferred, ...others].slice(0, 3)
                return related.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)
              })()}
            </div>
          <div className="text-center mt-6">
            <Link to="/projects" className="btn-ghost">Explore All Projects</Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-2xl p-8 text-center text-white" style={{ backgroundImage: 'linear-gradient(135deg, #E30613, #b1040f)' }}>
            {service.slug === 'social-media-management' ? (
              <>
                <h3 className="text-xl font-semibold">Ready to Elevate Your Social Presence?</h3>
                <p className="mt-2 text-white/90">Let’s create a social media strategy that grows your brand and engages your audience.</p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold">Need a Custom Solution?</h3>
                <p className="mt-2 text-white/90">Let’s discuss your unique requirements and build something exceptional.</p>
              </>
            )}
            <div className="mt-4">
              <Link to={`/contact?service=${encodeURIComponent(service.slug)}`} className="btn-ghost bg-white text-slate-900 hover:bg-white/90">Get a Free Consultation</Link>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-extrabold">Other Services</h2>
            <Link to="/services" className="btn-ghost">All Services</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
