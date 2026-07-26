export default function Portfolio() {
  const apps = [
    {
      name: 'Quicksnap',
      description: 'Scan and organize anything. Your digital filing system for the modern age.',
      downloads: '12M+',
      featured: true,
    },
    {
      name: 'Looply',
      description: 'Habits that actually stick. Build routines that transform your life.',
      downloads: '8M+',
      featured: false,
    },
    {
      name: 'Wallshift',
      description: 'Wallpapers that move with you. Dynamic backgrounds for every moment.',
      downloads: '6M+',
      featured: false,
    },
    {
      name: 'Timefly',
      description: 'Track moments, not minutes. Capture what truly matters.',
      downloads: '5M+',
      featured: false,
    },
    {
      name: 'Mindful',
      description: 'Meditation meets community. Find peace together.',
      downloads: '7M+',
      featured: false,
    },
    {
      name: 'Flashcards',
      description: 'Learn anything, retain everything. Master any subject.',
      downloads: '9M+',
      featured: false,
    },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            We've built and scaled 12 apps with over 150 million downloads worldwide. Each one carefully crafted and continuously optimized for maximum engagement.
          </p>
        </div>

        <div className="space-y-16">
          {apps.map((app, index) => (
            <div key={index} className={`grid gap-12 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} lg:items-center`}>
              {/* Left: Text (or right on alternate rows) */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-3xl font-bold text-foreground sm:text-4xl">{app.name}</h3>
                <p className="mt-4 text-lg text-text-secondary">{app.description}</p>
                <div className="mt-6 flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{app.downloads}</div>
                    <div className="text-sm text-text-secondary">Downloads</div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-foreground transition hover:gap-3 font-semibold">
                    Get App
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Image placeholder */}
              <div className={`hidden lg:flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-full aspect-square bg-surface rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-text-secondary">{app.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
