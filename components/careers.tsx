'use client'

import Link from 'next/link'

export default function Careers() {
  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Join us today
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          We work with creative minds, content creators and technical innovators willing to entertain and empower the world.
        </p>
        <Link
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-6 py-3 text-foreground transition hover:bg-foreground hover:text-background sm:px-8 sm:py-4"
        >
          See jobs
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
