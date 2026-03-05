import type { ThemeConfig } from './index'

const lawfirm: ThemeConfig = {
  id: 'lawfirm',
  name: 'Sterling & Associates',
  tagline: 'Attorneys at Law',
  meta: {
    title: 'Sterling & Associates — Attorneys at Law',
    description: 'Experienced legal counsel you can trust.',
  },
  hero: {
    heading: 'Trusted Legal Counsel',
    sub: 'Decades of experience protecting your rights. We fight for the outcomes you deserve.',
    cta: 'Read Our Articles',
  },
  features: [
    { title: 'Corporate Law', desc: 'Mergers, acquisitions, and compliance — strategic advice for businesses of every size.' },
    { title: 'Litigation', desc: 'Aggressive courtroom representation backed by meticulous preparation and research.' },
    { title: 'Estate Planning', desc: 'Protect your legacy with wills, trusts, and comprehensive succession strategies.' },
  ],
  blog: {
    heading: 'Legal Insights',
    sub: 'Articles and analysis from our attorneys',
  },
  footer: '© 2026 Sterling & Associates LLP. All rights reserved.',
  hasMedia: false,
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Insights' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
}

export default lawfirm
