import Container from '../components/Container'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { SEO } from '../lib/seo'
import { site } from '../data/site'

export default function Contact() {
  return (
    <>
      <SEO title="Contact" jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Asad Saif',
        url: site.seo.siteUrl,
        contactPoint: [{
          '@type': 'ContactPoint',
          email: 'Asadsaif9600@gmail.com',
          telephone: '+1 647-951-2786',
          contactType: 'customer support',
          areaServed: 'CA',
          availableLanguage: 'en'
        }]
      }} />
      <Section>
        <Container>
          <SectionHeading title="Contact" subtitle="Let,s talk about your project" />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <ContactForm />
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <div className="font-semibold">Email</div>
                <a className="hover:text-brand-red" href="mailto:Asadsaif9600@gmail.com">Asadsaif9600@gmail.com</a>
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <a className="hover:text-brand-red" href="tel:+16479512786">+1 647-951-2786</a>
              </div>
              <div>
                <div className="font-semibold">Location</div>
                <p>870 Queenston Road</p>
              </div>
              <div>
                <div className="font-semibold">Links</div>
                <div className="flex gap-3 mt-1">
                  <a className="hover:text-brand-red" href="https://www.linkedin.com/in/asadsaif1/">LinkedIn</a>
                  <a className="hover:text-brand-red" href="https://github.com/asad0111f">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
