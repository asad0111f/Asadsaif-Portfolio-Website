import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '../Home'

// Mock all the components
vi.mock('../../components/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('../../components/Highlights', () => ({
  default: () => <div data-testid="highlights">Highlights Component</div>
}))

vi.mock('../../components/ProjectsGrid', () => ({
  default: ({ limit }: { limit: number }) => (
    <div data-testid="projects-grid">Projects Grid (limit: {limit})</div>
  )
}))

vi.mock('../../components/Businesses', () => ({
  default: () => <div data-testid="businesses">Businesses Component</div>
}))

vi.mock('../../components/Testimonials', () => ({
  default: () => <div data-testid="testimonials">Testimonials Component</div>
}))

vi.mock('../../components/SkillsCloud', () => ({
  default: () => <div data-testid="skills-cloud">Skills Cloud Component</div>
}))

vi.mock('../../components/Section', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <section data-testid="section">{children}</section>
  )
}))

vi.mock('../../components/Container', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  )
}))

vi.mock('../../lib/seo', () => ({
  SEO: ({ title }: { title: string }) => <div data-testid="seo">SEO: {title}</div>
}))

describe('Home', () => {
  it('renders all main sections', () => {
    render(<Home />)
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('highlights')).toBeInTheDocument()
    expect(screen.getByTestId('projects-grid')).toBeInTheDocument()
    expect(screen.getByTestId('businesses')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('skills-cloud')).toBeInTheDocument()
  })

  it('renders SEO component with correct title', () => {
    render(<Home />)
    expect(screen.getByTestId('seo')).toHaveTextContent('SEO: Home')
  })

  it('passes limit prop to ProjectsGrid', () => {
    render(<Home />)
    expect(screen.getByTestId('projects-grid')).toHaveTextContent('limit: 6')
  })

  it('renders call-to-action section', () => {
    render(<Home />)
    expect(screen.getByText('Have a project in mind?')).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('has correct link to contact page', () => {
    render(<Home />)
    const contactLink = screen.getByRole('link', { name: /get in touch/i })
    expect(contactLink).toHaveAttribute('href', '/contact')
  })
})
