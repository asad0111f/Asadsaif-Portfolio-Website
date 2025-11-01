export type SocialLinks = {
  twitter?: string
  github?: string
  linkedin?: string
  instagram?: string
  website?: string
}

export type Owner = {
  name: string
  title: string
  location: string
  email: string
  phone: string
  headshot: string
  social: SocialLinks
}

export type Highlight = { label: string; value: string }

export type Business = {
  name: string
  slug: string
  tagline: string
  description: string
  location: string
  offerings: string[]
  links: { website?: string }
}

export type Project = {
  slug: string
  title: string
  summary: string
  type: 'web' | 'mobile' | 'fullstack' | 'video' | 'design'
  year: number
  role: string
  tech: string[]
  image: string
  links: { live?: string; repo?: string; case?: string }
}

export type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export type Skills = {
  Frontend: string[]
  Mobile: string[]
  'Backend/DB': string[]
  'Marketing/Ads': string[]
  Tools: string[]
}

export type NavItem = { label: string; to: string }

export type CTA = {
  hero: { primary: { label: string; to: string }; secondary: { label: string; to: string } }
  global: { label: string; to: string }
}

export type SEOConfig = {
  title: string
  description: string
  keywords: string[]
  siteUrl: string
  ogImage: string
}

export type Service = {
  title: string
  slug: string
  description: string
}

export type Site = {
  owner: Owner
  highlights: Highlight[]
  businesses: Business[]
  services: Service[]
  projects: Project[]
  testimonials: Testimonial[]
  skills: Skills
  nav: NavItem[]
  cta: CTA
  seo: SEOConfig
}

export const site: Site = {
  owner: {
    name: 'Asad Saif',
    title: 'Fullâ€‘Stack Developer & Founder',
    location: 'Hamilton, Ontario',
    email: 'Asadsaif9600@gmail.com',
    phone: '+1 (555) 000â€‘0000',
    headshot: '/images/owner.svg',
    social: {
      twitter: 'https://twitter.com/',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://instagram.com/',
      website: 'https://example.com'
    }
  },
  highlights: [
    { label: 'Years Experience', value: '6+' },
    { label: 'Projects Shipped', value: '40+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Avg. Review', value: 'â˜… 4.9' }
  ],
  businesses: [
    {
      name: 'Pure Marketing and Advertising',
      slug: 'pure-marketing',
      tagline: 'Marketing & development agency in Hamilton',
      description: 'We help brands grow with dataâ€‘driven marketing, modern web experiences, and compelling content.',
      location: 'Hamilton, Ontario',
      offerings: [
        'Social Media Management + Content Creation',
        'Custom Web Development',
        'Google Ads',
        'Meta Ads',
        'SEO',
        'WordPress',
        'Mobile Apps',
        'Content Creation'
      ],
      links: { website: 'https://example.com' }
    },
    {
      name: 'Apply Buddies',
      slug: 'apply-buddies',
      tagline: 'Helping students from developing countries apply & get admissions',
      description: 'A web + mobile platform that guides students through applications, document prep, and admissions workflows.',
      location: 'Hamilton, Ontario',
      offerings: [
        'Student counseling',
        'Application workflow',
        'Document prep',
        'University portal integrations (placeholder)',
        'Web/mobile app'
      ],
      links: { website: 'https://example.com' }
    }
  ],
  services: [
    { title: 'Social Media Management', slug: 'social-media-management', description: 'Grow your brand with consistent, onâ€‘brand content and community management.' },
    { title: 'Custom Web Development', slug: 'custom-web-development', description: 'Highâ€‘performance, SEOâ€‘friendly websites built with modern stacks.' },
    { title: 'Mobile App Development', slug: 'mobile-app-development', description: 'iOS/Android apps with React Native and polished UX.' },
    { title: 'Google & Meta Ads', slug: 'google-meta-ads', description: 'ROIâ€‘focused campaigns with transparent reporting and optimization.' },
    { title: 'Social Media + Content', slug: 'social-media-content', description: 'Strategy + production: shortâ€‘form video, carousels, graphics, and copy.' },
    { title: 'WordPress Development', slug: 'wordpress-development', description: 'Custom themes, performance tuning, and integrations.' },
    { title: 'Search Engine Optimization', slug: 'seo', description: 'Technical + onâ€‘page SEO to improve visibility and conversions.' },
    { title: 'Graphic Designing', slug: 'graphic-design', description: 'Brand assets, marketing collateral, and visual systems.' }
  ],
  projects: [
    {
      slug: 'commerce-next',
      title: 'CommerceNext',
      summary: 'Headless commerce storefront with Stripe and CMS integration.',
      type: 'fullstack',
      year: 2024,
      role: 'Lead Developer',
      tech: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'fitness-mobile',
      title: 'FitPulse Mobile',
      summary: 'React Native app for workout tracking with offline support.',
      type: 'mobile',
      year: 2023,
      role: 'Mobile Engineer',
      tech: ['React Native', 'Expo', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1571907480495-7d1f2b53f29b?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'saas-dashboard',
      title: 'SaaS Analytics Dashboard',
      summary: 'Multi-tenant analytics dashboard with role-based access.',
      type: 'web',
      year: 2023,
      role: 'Fullâ€‘Stack Dev',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551281044-8ea0b0e1f6be?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'local-seo',
      title: 'Local SEO Accelerator',
      summary: 'SEO strategy and landing page system for SMBs.',
      type: 'web',
      year: 2022,
      role: 'Growth Engineer',
      tech: ['SEO', 'React', 'Vite'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'events-app',
      title: 'City Events',
      summary: 'Mobile-first events discovery with real-time updates.',
      type: 'fullstack',
      year: 2024,
      role: 'Engineer',
      tech: ['React', 'Firebase', 'PNGs', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'fintech-wallet',
      title: 'Fintech Wallet',
      summary: 'PWA wallet prototype with biometric login.',
      type: 'web',
      year: 2022,
      role: 'Frontend Dev',
      tech: ['React', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    },
    {
      slug: 'food-delivery',
      title: 'QuickBite',
      summary: 'Food delivery MVP with maps and realtime orders.',
      type: 'mobile',
      year: 2021,
      role: 'Mobile Dev',
      tech: ['React Native', 'Firebase', 'Maps'],
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80&auto=format&fit=crop',
      links: { live: '#', repo: '#', case: '#' }
    }
    ,
    {
      slug: 'apply-buddies',
      title: 'Apply Buddies',
      summary: 'Platform helping students apply and get admissions abroad.',
      type: 'fullstack',
      year: 2024,
      role: 'Full-Stack Developer',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image: '/graphics/thumbs/Apply Buddies.jpg',
      links: { live: 'https://www.applybuddies.com/' }
    },
    {
      slug: 'sp-towing',
      title: 'SP Towing',
      summary: 'Towing service website with contact and booking funnels.',
      type: 'fullstack',
      year: 2024,
      role: 'Full-Stack Developer',
      tech: ['React', 'Node.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1493236296276-d17357e28823?w=1200&q=80&auto=format&fit=crop',
      links: { live: 'https://www.sptowing.ca' }
    },
    {
      slug: 'limo-4-all',
      title: 'Limo 4 All',
      summary: 'Luxury transportation website with service pages and forms.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Vite', 'Tailwind'],
      image: '/graphics/thumbs/Limo 4 all.jpg',
      links: { live: 'https://www.limo4all.ca/' }
    },
    {
      slug: 'gravity-contractors',
      title: 'Gravity Contractors Ltd',
      summary: 'General contracting website showcasing services and projects.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Tailwind', 'SEO'],
      image: '/graphics/thumbs/Gravity Contractors Ltd.jpg',
      links: { live: 'https://www.gravitycontractors.ca/' }
    },
    {
      slug: 'tranquility-compassion',
      title: 'Tranquility Compassion â€” Personal Support Services',
      summary: 'Care services website with clear info architecture and CTAs.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Tailwind', 'SEO'],
      image: '/graphics/thumbs/Tranquillity Compassion.jpg',
      links: { live: 'https://www.tranquilitycompassion.ca/' }
    },
    {
      slug: 'isnad-association',
      title: 'Isnad Association â€” Nonâ€‘Profit',
      summary: 'Nonâ€‘profit site to highlight mission, programs, and donations.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Tailwind', 'SEO'],
      image: '/graphics/thumbs/Isnad Association.jpg',
      links: { live: 'https://isnadassociation.org/' }
    },
    {
      slug: 'greypro',
      title: 'Greypro',
      summary: 'Clean, modern company website optimized for conversions.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Vite', 'Tailwind'],
      image: '/graphics/thumbs/Greypro.jpg',
      links: { live: 'https://greypro.ca/' }
    },
    {
      slug: 'bansal-auto-garage',
      title: 'Bansal Auto Garage',
      summary: 'Auto garage website built on WordPress with fast pages and clear CTAs.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['WordPress', 'SEO', 'Performance'],
      image: '/graphics/thumbs/Bansal Auto Garage.jpg',
      links: { live: 'https://bansalauto.ca/' }
    },
    {
      slug: 'canine-support-services',
      title: 'Canine Support Services',
      summary: 'Website presenting services with contact and booking CTAs.',
      type: 'web',
      year: 2024,
      role: 'Web Developer',
      tech: ['React', 'Tailwind', 'SEO'],
      image: '/graphics/thumbs/Canine Support Services.jpg',
      links: { live: 'https://caninesupportservices.ca/' }
    }
    ,
    {
      slug: 'reel-local-eatery',
      title: 'Brand Reel — Local Eatery',
      summary: 'Short-form promo reel edited for a restaurant.',
      type: 'video',
      year: 2024,
      role: 'Video Editor',
      tech: ['Premiere Pro', 'After Effects', 'Captions', 'Color'],
      image: '/graphics/thumbs/Canine Support Services.png',
      links: { live: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' }
    },
    {
      slug: 'promo-fitness-studio',
      title: 'Promo — Fitness Studio',
      summary: '30-second ad edit with motion graphics and SFX.',
      type: 'video',
      year: 2024,
      role: 'Video Editor',
      tech: ['Premiere Pro', 'Motion', 'SFX', 'Grading'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop',
      links: { live: 'https://www.youtube.com/watch?v=ScMzIvxBSi4' }
    },
    {
      slug: 'identity-cafe',
      title: 'Brand Identity — Café',
      summary: 'Logo and brand system with print-ready assets.',
      type: 'design',
      year: 2024,
      role: 'Graphic Designer',
      tech: ['Illustrator', 'Photoshop', 'Brand'],
      image: 'https://images.unsplash.com/photo-1520975922326-2208d157c9e2?w=1200&q=80&auto=format&fit=crop',
      links: { }
    },
    {
      slug: 'poster-city-fest',
      title: 'Promo Poster — City Fest',
      summary: 'Event poster and social variants.',
      type: 'design',
      year: 2024,
      role: 'Graphic Designer',
      tech: ['Photoshop', 'Typography', 'Print'],
      image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=1200&q=80&auto=format&fit=crop',
      links: { }
    },
    {
      slug: 'canine-support-services-video',
      title: 'Promo - Canine Support Services',
      summary: 'Short-form promo reel edited for Canine Support Services.',
      type: 'video',
      year: 2024,
      role: 'Video Editor',
      tech: ['Premiere Pro', 'After Effects', 'Captions', 'Color'],
      image: '/graphics/thumbs/Canine Support Services.jpg',
      links: { }
    },
    {
      slug: 'travel-visa-video',
      title: 'Brand Reel - Travel Visa',
      summary: '30-second ad edit with motion graphics for Travel Visa.',
      type: 'video',
      year: 2024,
      role: 'Video Editor',
      tech: ['Premiere Pro', 'Motion', 'SFX', 'Grading'],
      image: '/graphics/thumbs/Travel Vista.jpg',
      links: { }
    },
    {
      slug: 'canine-support-services-design',
      title: 'Social Creatives- Canine Support Services',
      summary: 'Logo and marketing assets created for Canine Support Services.',
      type: 'design',
      year: 2024,
      role: 'Graphic Designer',
      tech: ['Illustrator', 'Photoshop', 'Brand'],
      image: '/graphics/thumbs/Social Creatives- Canine Support Services.jpg',
      links: { }
    },
    {
      slug: 'travel-visa-design',
      title: 'Social Creatives-Travel Vista',
      summary: 'Ad creatives and social posts for Travel Visa.',
      type: 'design',
      year: 2024,
      role: 'Graphic Designer',
      tech: ['Photoshop', 'Typography', 'Print'],
      image: '/graphics/thumbs/Social Creatives-Travel Vista.jpg',
      links: { }
    }
  ],
  testimonials: [
    { quote: 'Asad delivered beyond expectationsâ€”on time and on brand.', author: 'M. Clarke', role: 'CEO', company: 'Northbay' },
    { quote: 'Clear communication and excellent technical depth.', author: 'R. Gupta', role: 'CTO', company: 'Astreon' },
    { quote: 'Our traffic and conversions jumped significantly.', author: 'S. Young', role: 'Marketing Lead', company: 'Brightly' },
    { quote: 'Pixel-perfect UI with smooth performance.', author: 'L. Cho', role: 'Product Manager', company: 'Velox' },
    { quote: 'Highly recommend for startups needing speed.', author: 'D. Patel', role: 'Founder', company: 'Nimbus' },
    { quote: 'A great partner and problem-solver.', author: 'E. Martin', role: 'COO', company: 'Cinder' }
  ],
  skills: {
    Frontend: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Framer Motion'],
    Mobile: ['React Native', 'Expo', 'Push Notifications'],
    'Backend/DB': ['Firebase', 'Node.js', 'Auth', 'Stripe'],
    'Marketing/Ads': ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    Tools: ['Git', 'Figma', 'Vercel', 'Netlify']
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ],
  cta: {
    hero: {
      primary: { label: 'View Projects', to: '/projects' },
      secondary: { label: 'Contact', to: '/contact' }
    },
    global: { label: 'Work with me', to: '/contact' }
  },
  seo: {
    title: 'Asad Saif — Portfolio',
    description: 'Fullâ€‘stack developer & founder building modern web and mobile products.',
    keywords: ['Asad Saif', 'Portfolio', 'React', 'React Native', 'Hamilton', 'Web Development', 'Mobile Apps', 'SEO'],
    siteUrl: 'https://asadsaif.com',
    ogImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop'
  }
}

