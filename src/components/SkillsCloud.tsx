import { motion } from 'framer-motion'
import Container from './Container'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { site } from '../data/site'

const variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } }),
}

export default function SkillsCloud() {
  const groups = site.skills
  return (
    <Section>
      <Container>
        <SectionHeading title="Tech Stack" subtitle="Tools I use to ship fast." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(groups).map(([group, items], gi) => (
            <div key={group} className="glass p-4">
              <h3 className="font-semibold mb-2">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((it, i) => (
                  <motion.span key={it} variants={variants} custom={gi + i} initial="hidden" whileInView="show" viewport={{ once: true }} className="px-2 py-1 text-xs rounded-md bg-black/5 dark:bg-white/10">
                    {it}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
