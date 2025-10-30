import Container from './Container'
import Section from './Section'
import SectionHeading from './SectionHeading'
import BusinessCard from './BusinessCard'
import { site } from '../data/site'

export default function Businesses() {
  return (
    <Section id="businesses">
      <Container>
        <SectionHeading title="Businesses" subtitle="Ventures I operate and actively grow." />
        <div className="grid sm:grid-cols-2 gap-6">
          {site.businesses.map((b) => (
            <BusinessCard key={b.slug} b={b} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
