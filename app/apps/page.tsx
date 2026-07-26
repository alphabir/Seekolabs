import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Our Apps | Seekolabs',
  description: 'Explore all of Seekolabs\' mobile applications with 150M+ downloads.',
}

const apps = [
  {
    name: 'Peak Games',
    category: 'Puzzle',
    downloads: '25M+',
    description: 'Brain-training puzzle game that challenges your mind with thousands of levels.',
    color: 'accent-lime',
    link: 'https://apps.apple.com',
  },
  {
    name: 'Infinite Runner',
    category: 'Action',
    downloads: '18M+',
    description: 'Endless arcade action with stunning visuals and addictive gameplay.',
    color: 'accent-red',
    link: 'https://apps.apple.com',
  },
  {
    name: 'Word Wizard',
    category: 'Casual',
    downloads: '22M+',
    description: 'Connect words and create combos in this word-building adventure.',
    color: 'accent-blue',
    link: 'https://apps.apple.com',
  },
  {
    name: 'Match Masters',
    category: 'Puzzle',
    downloads: '20M+',
    description: 'Classic match-three gameplay with a modern twist and daily challenges.',
    color: 'accent-lime',
    link: 'https://apps.apple.com',
  },
  {
    name: 'Tap Titans',
    category: 'Action',
    downloads: '19M+',
    description: 'Tap, upgrade, and conquer in this incremental idle adventure.',
    color: 'accent-red',
    link: 'https://apps.apple.com',
  },
  {
    name: 'Quest Quest',
    category: 'Adventure',
    downloads: '21M+',
    description: 'Epic fantasy RPG with engaging stories and strategic battles.',
    color: 'accent-blue',
    link: 'https://apps.apple.com',
  },
]

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance font-bold leading-tight text-foreground">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Apps That People
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-lime">
              Actually Love.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            We&apos;ve created 12 apps that collectively have been downloaded over 150 million times. Each one was built with a laser focus on user engagement and quality.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, index) => (
              <a
                key={index}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-surface p-6 transition hover:border-foreground hover:bg-surface/80"
              >
                {/* Icon placeholder */}
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-${app.color} text-background font-bold text-xl`}>
                  {app.name.charAt(0)}
                </div>
                
                <h3 className="mt-4 text-xl font-bold text-foreground">{app.name}</h3>
                <p className="text-sm text-accent-lime">{app.category}</p>
                <p className="mt-2 text-sm font-semibold text-text-secondary">{app.downloads} downloads</p>
                
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {app.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-accent-lime">
                  Download Now
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">150M+</div>
              <p className="mt-2 text-sm text-text-secondary">Total Downloads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">45M+</div>
              <p className="mt-2 text-sm text-text-secondary">Monthly Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">4.8★</div>
              <p className="mt-2 text-sm text-text-secondary">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Want to build the next hit?</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Let&apos;s create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-background sm:px-8 sm:py-4"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
