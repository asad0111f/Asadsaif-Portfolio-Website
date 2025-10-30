import Container from './Container'
import { site } from '../data/site'
import { motion } from 'framer-motion'

export default function Highlights() {
  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 glass p-4">
        {site.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center py-2"
          >
            <div className="text-xl font-extrabold">{h.label === 'Avg. Review' ? '4.9' : h.value}</div>
            <div className="text-xs text-slate-500">{h.label}</div>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}
