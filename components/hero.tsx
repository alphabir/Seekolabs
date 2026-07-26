'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-balance font-bold leading-tight text-foreground">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Build apps
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl mt-2">
                that scale.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl max-w-md">
              We create, launch, and scale mobile applications with millions of downloads and engaged users worldwide. A decade of game development excellence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/apps" className="inline-flex items-center gap-2 text-foreground transition hover:gap-3">
                Explore Our Apps
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-foreground transition hover:bg-foreground hover:text-background">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right: Visual (placeholder for 3D visual) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square bg-surface rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <p className="text-text-secondary">Global App Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
