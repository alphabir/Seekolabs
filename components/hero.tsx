'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-balance font-bold leading-tight text-foreground">
          <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Small apps.
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-lime">
            Massive reach.
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
          We build, launch, and scale mobile apps that people actually open every day.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/apps" className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-foreground transition hover:bg-foreground hover:text-background">
            Explore Our Apps
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center bg-accent-lime px-6 py-3 font-semibold text-background transition hover:bg-white">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  )
}
