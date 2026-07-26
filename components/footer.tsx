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
            <Link href="/" className="text-lg font-bold text-foreground transition hover:opacity-80">
              SEEKOLABS
            </Link>
            <p className="mt-4 text-sm text-text-secondary">
              Build apps that scale globally.
            </p>
            <p className="mt-6 text-xs text-text-secondary">
              © {currentYear} Seekolabs. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-text-secondary transition hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-text-secondary transition hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/apps" className="text-sm text-text-secondary transition hover:text-foreground">
                  Apps
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary transition hover:text-foreground">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
