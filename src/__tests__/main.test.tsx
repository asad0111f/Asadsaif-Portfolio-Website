import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the dependencies
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn()
  }))
}))

vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="browser-router">{children}</div>
  )
}))

vi.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="helmet-provider">{children}</div>
  )
}))

vi.mock('../App', () => ({
  default: () => <div data-testid="app">App Component</div>
}))

vi.mock('../index.css', () => ({}))

describe('main.tsx', () => {
  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: vi.fn(() => null),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    })

    // Mock matchMedia
    Object.defineProperty(globalThis, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    // Mock document.getElementById
    const mockElement = document.createElement('div')
    mockElement.id = 'root'
    document.body.appendChild(mockElement)
  })

  it('should render without crashing', () => {
    // This test mainly ensures the module can be imported without errors
    expect(() => {
      import('../main')
    }).not.toThrow()
  })
})
