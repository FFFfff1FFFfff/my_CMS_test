import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { theme } from '../../themes'

export const metadata: Metadata = {
  title: theme.meta.title,
  description: theme.meta.description,
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-theme={theme.id}>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="logo">{theme.name}</a>
            <div className="nav-links">
              {theme.navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>{theme.footer}</p>
        </footer>
      </body>
    </html>
  )
}
