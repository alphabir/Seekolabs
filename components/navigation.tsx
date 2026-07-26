'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-foreground transition hover:opacity-80">
            SEEKOLABS
          </Link>

          {/* Links */}
          <div className="hidden items-center gap-8 sm:flex">
            <Link 
              href="/about" 
              className={`text-sm transition ${isActive('/about') ? 'text-foreground font-semibold' : 'text-text-secondary hover:text-foreground'}`}
            >
              About
            </Link>
            <Link 
              href="/apps" 
              className={`text-sm transition ${isActive('/apps') ? 'text-foreground font-semibold' : 'text-text-secondary hover:text-foreground'}`}
            >
              Apps
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition ${isActive('/contact') ? 'text-foreground font-semibold' : 'text-text-secondary hover:text-foreground'}`}
            >
              Contact
            </Link>
            <Link 
              href="/careers" 
              className={`text-sm transition ${isActive('/careers') ? 'text-foreground font-semibold' : 'text-text-secondary hover:text-foreground'}`}
            >
              Careers
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="sm:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
