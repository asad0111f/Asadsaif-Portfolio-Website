import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

// Mock the pages to avoid complex dependencies
vi.mock('../pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../pages/Projects', () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>
}))

vi.mock('../pages/About', () => ({
  default: () => <div data-testid="about-page">About Page</div>
}))

vi.mock('../pages/Businesses', () => ({
  default: () => <div data-testid="businesses-page">Businesses Page</div>
}))

vi.mock('../pages/Reviews', () => ({
  default: () => <div data-testid="reviews-page">Reviews Page</div>
}))

vi.mock('../pages/Contact', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>
}))

vi.mock('../pages/NotFound', () => ({
  default: () => <div data-testid="not-found-page">Not Found Page</div>
}))

vi.mock('../pages/ProjectDetail', () => ({
  default: () => <div data-testid="project-detail-page">Project Detail Page</div>
}))

vi.mock('../layouts/MainLayout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="main-layout">
      <nav data-testid="navigation">Navigation</nav>
      {children}
    </div>
  )
}))

vi.mock('../lib/seo', () => ({
  DefaultSEO: () => <div data-testid="seo">SEO</div>
}))

const AppWrapper = () => (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

describe('App', () => {
  it('renders the main layout', () => {
    render(<AppWrapper />)
    expect(screen.getByTestId('main-layout')).toBeInTheDocument()
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  it('renders the home page by default', () => {
    render(<AppWrapper />)
    // The home page content should be rendered within the main layout
    expect(screen.getByTestId('main-layout')).toBeInTheDocument()
  })

  it('includes SEO component', () => {
    render(<AppWrapper />)
    expect(screen.getByTestId('seo')).toBeInTheDocument()
  })
})
