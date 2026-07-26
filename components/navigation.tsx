'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition hover:border-accent-lime">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-accent-lime"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="6" y1="3" x2="6" y2="21" />
                <line x1="12" y1="6" x2="12" y2="21" />
                <line x1="18" y1="9" x2="18" y2="21" />
              </svg>
            </div>
            <span className="hidden font-bold text-foreground transition hover:text-accent-lime sm:inline">SEEKOLABS</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link 
              href="/about" 
              className={`text-sm transition ${isActive('/about') ? 'text-accent-lime' : 'text-text-secondary hover:text-foreground'}`}
            >
              About
            </Link>
            <Link 
              href="/apps" 
              className={`text-sm transition ${isActive('/apps') ? 'text-accent-lime' : 'text-text-secondary hover:text-foreground'}`}
            >
              Apps
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition ${isActive('/contact') ? 'text-accent-lime' : 'text-text-secondary hover:text-foreground'}`}
            >
              Contact
            </Link>
            <Link 
              href="/careers" 
              className={`text-sm transition ${isActive('/careers') ? 'text-accent-lime' : 'text-text-secondary hover:text-foreground'}`}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
