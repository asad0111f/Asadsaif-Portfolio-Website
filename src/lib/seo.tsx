import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'
import { useLocation } from 'react-router-dom'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  jsonLd?: object | object[]
  robots?: string
}

export function SEO({ title, description, image, jsonLd, robots }: SEOProps) {
  const loc = useLocation()
  const canonical = `${site.seo.siteUrl}${loc.pathname}${loc.search ?? ''}`
  const url = typeof window !== 'undefined' ? window.location.href : canonical
  const t = title ? `${title} — ${site.seo.title}` : site.seo.title
  const desc = description ?? site.seo.description
  const img = image ?? site.seo.ogImage
  const jsonArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={site.seo.keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonArray.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
      {(robots || import.meta.env.VITE_NOINDEX === 'true') && (
        <meta name="robots" content={robots || 'noindex,follow'} />
      )}
    </Helmet>
  )
}

export function DefaultSEO() {
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

