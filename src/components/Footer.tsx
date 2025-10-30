import Container from './Container'
import { site } from '../data/site'
import { Github, Linkedin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-black/5 dark:border-white/10">
      <Container className="py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500">© {new Date().getFullYear()} {site.owner.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {site.owner.social.github && (
            <a className="hover:text-brand-red" href={site.owner.social.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
          )}
          {site.owner.social.linkedin && (
            <a className="hover:text-brand-red" href={site.owner.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          )}
          {site.owner.social.website && (
            <a className="hover:text-brand-red" href={site.owner.social.website} aria-label="Website" target="_blank" rel="noreferrer"><Globe size={18} /></a>
          )}
        </div>
      </Container>
    </footer>
  )
}

