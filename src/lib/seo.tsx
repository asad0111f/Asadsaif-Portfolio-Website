import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'
import { useLocation } from 'react-router-dom'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  jsonLd?: object
}

export function SEO({ title, description, image, jsonLd }: SEOProps) {
  const url = typeof window !== 'undefined' ? window.location.href : site.seo.siteUrl
  const t = title ? `${title} — ${site.seo.title}` : site.seo.title
  const desc = description ?? site.seo.description
  const img = image ?? site.seo.ogImage
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={site.seo.keywords.join(', ')} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

export function DefaultSEO() {
  const loc = useLocation()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.owner.name,
    jobTitle: site.owner.title,
    url: site.seo.siteUrl,
    sameAs: Object.values(site.owner.social)
  }
  return <SEO jsonLd={jsonLd} />
}
