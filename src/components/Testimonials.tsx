import { useEffect, useState } from 'react'
import Container from './Container'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Card from './Card'
import { site } from '../data/site'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const items = site.testimonials

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <Section id="testimonials" className="pt-10">
      <Container>
        <SectionHeading title="What Clients Say" subtitle="A few kind words from collaborators." />
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="glass p-6 text-center">
                  <p className="text-lg md:text-xl leading-relaxed">“{items[index].quote}”</p>
                  <p className="mt-3 text-sm text-slate-500">— {items[index].author}, {items[index].role} at {items[index].company}</p>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1">
            {items.map((_, i) => (
              <button key={i} aria-label={`Go to testimonial ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-brand-red' : 'bg-black/20 dark:bg-white/20'}`} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
