import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ManualReviewsCarousel from '../components/ManualReviewsCarousel'
import { SEO } from '../lib/seo'

export default function Reviews() {
  return (
    <>
      <SEO title="Reviews" />
      <Section>
        <Container>
          <SectionHeading title="Google Reviews" subtitle="Reviews imported from Google Maps as provided." />
          <ManualReviewsCarousel />
        </Container>
      </Section>
    </>
  )
}
