export type CreativeItem = {
  src: string
  alt?: string
}

// Map project slug to an array of creative assets.
// Add more image entries per project as needed.
export const creativesByProject: Record<string, CreativeItem[]> = {
  'canine-support-services-design': [
    { src: '/graphics/creatives/Canine Support Services Post 1.jpg', alt: 'Canine Support Services Post 1' },
    { src: '/graphics/creatives/Canine Support Services Post 2.jpg', alt: 'Canine Support Services Post 2' },
    { src: '/graphics/creatives/Canine Support Services Post 3.jpg', alt: 'Canine Support Services Post 3' },
    { src: '/graphics/creatives/Canine Support Services Post 11.jpg', alt: 'Canine Support Services Post 11' }
  ],
  'travel-visa-design': [
    { src: '/graphics/thumbs/Social Creatives-Travel Vista.jpg', alt: 'Social Creatives - Travel Vista (thumb)' }
  ]
}

// Optional: client logos per design project (can be empty initially)
export const logosByProject: Record<string, CreativeItem[]> = {
  'canine-support-services-design': [
    { src: '/graphics/logos/CANINE SUPPORT SERVICES LOGO.jpg', alt: 'Canine Support Services Logo' }
  ],
  'travel-visa-design': [
    { src: '/graphics/logos/Travel Vista Gradient Hero Logo ( White Background).jpg', alt: 'Travel Vista Logo' }
  ]
}
