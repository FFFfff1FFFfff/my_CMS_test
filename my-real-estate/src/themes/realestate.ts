import type { ThemeConfig } from './index'

const realestate: ThemeConfig = {
  id: 'realestate',
  name: 'Luxe Realty',
  tagline: 'Premium Real Estate',
  meta: {
    title: 'Luxe Realty — Premium Real Estate',
    description: 'Find your dream property with Luxe Realty',
  },
  hero: {
    heading: 'Find Your Perfect Home',
    sub: 'Premium properties curated for discerning buyers. Let us guide you to your next chapter.',
    cta: 'Read Our Insights',
  },
  features: [
    { title: 'Curated Listings', desc: 'Hand-selected properties that meet the highest standards of quality and value.' },
    { title: 'Market Insights', desc: 'Stay informed with expert analysis and trends from our seasoned real estate team.' },
    { title: 'Concierge Service', desc: 'White-glove support from first viewing to closing day and beyond.' },
  ],
  blog: {
    heading: 'Blog',
    sub: 'Insights, tips, and market updates from our team',
  },
  footer: '© 2026 Luxe Realty. All rights reserved.',
  hasMedia: true,
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
}

export default realestate
