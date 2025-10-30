import Container from '@/components/Container'
import Section from '@/components/Section'
import { Link } from 'react-router-dom'
import { SEO } from '@/lib/seo'

export default function NotFound() {
  return (
    <>
      <SEO title="404" />
      <Section>
        <Container>
          <div className="text-center py-24">
            <h1 className="text-6xl font-extrabold">404</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">This page wandered off.</p>
            <Link to="/" className="mt-6 inline-flex btn-primary">Back to Home</Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

