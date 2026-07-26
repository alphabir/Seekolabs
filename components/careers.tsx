'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Careers() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Join our team of builders
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          Help us build the next generation of apps that millions use every day.
        </p>
        <Link
          href="/careers"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-8 inline-block border border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition sm:px-8 sm:py-4"
          style={{
            backgroundColor: isHovered ? '#ffffff' : '#0a0a0a',
            color: isHovered ? '#0a0a0a' : '#ffffff',
          }}
        >
          See Open Positions
        </Link>
      </div>
    </section>
  )
}
