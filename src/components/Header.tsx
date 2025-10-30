import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Container from './Container'
import { site } from '../data/site'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-xs border-b border-black/5 dark:border-white/10 transition-shadow ${scrolled ? 'shadow-lg/10' : ''}`}>
      <Container className="flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold tracking-tight text-lg" onClick={() => setOpen(false)}>
          <span className="text-brand-red">A</span>sad Saif
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Primary">
          {site.nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg text-sm transition ${
                  isActive
                    ? 'text-white bg-brand-red shadow-glow'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-red hover:bg-black/5 dark:hover:bg-white/10'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to={site.cta.global.to} className="hidden sm:inline-flex btn-primary text-sm">{site.cta.global.label}</Link>
          <button
            className="md:hidden btn-ghost"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile overlay menu (does not push content) */}
      {open && (
        <div id="mobile-menu" className="md:hidden fixed inset-x-0 top-16 z-50">
          <div className="mx-4 sm:mx-6 lg:mx-8 rounded-2xl border border-black/5 dark:border-white/10 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xs shadow-lg">
            <nav className="flex flex-col gap-3 p-4" aria-label="Mobile">
              {site.nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? 'text-white bg-brand-red shadow-glow'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to={site.cta.global.to} onClick={() => setOpen(false)} className="mt-2 inline-flex btn-primary text-sm w-full justify-center">
                {site.cta.global.label}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
