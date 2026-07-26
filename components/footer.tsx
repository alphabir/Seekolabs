'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-4 md:gap-12">
          {/* Logo & Copyright */}
          <div className="sm:col-span-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface transition hover:border-accent-lime">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-accent-lime"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="6" y1="3" x2="6" y2="21" />
                  <line x1="12" y1="6" x2="12" y2="21" />
                  <line x1="18" y1="9" x2="18" y2="21" />
                </svg>
              </div>
              <span className="font-bold text-foreground transition hover:text-accent-lime">SEEKOLABS</span>
            </Link>
            <p className="mt-4 text-xs text-text-secondary">
              © {currentYear} Seekolabs. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-secondary transition hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <a href="https://blog.seekolabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-secondary transition hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Apps</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/apps" className="text-sm text-text-secondary transition hover:text-foreground">
                  All Apps
                </Link>
              </li>
              <li>
                <a href="https://medium.com/@seekolabs" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition hover:text-foreground">
                  Featured
                </a>
              </li>
              <li>
                <a href="https://press.seekolabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition hover:text-foreground">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
