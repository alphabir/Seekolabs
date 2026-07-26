export default function Portfolio() {
  const apps = [
    {
      name: 'Quicksnap',
      description: 'Scan and organize anything.',
      color: 'accent-lime',
      bgColor: '#c6ff3d',
    },
    {
      name: 'Looply',
      description: 'Habits that actually stick.',
      color: 'accent-red',
      bgColor: '#ff5d5d',
    },
    {
      name: 'Wallshift',
      description: 'Wallpapers that move with you.',
      color: 'accent-blue',
      bgColor: '#5da9ff',
    },
    {
      name: 'Timefly',
      description: 'Track moments, not minutes.',
      color: 'accent-lime',
      bgColor: '#c6ff3d',
    },
    {
      name: 'Mindful',
      description: 'Meditation meets community.',
      color: 'accent-red',
      bgColor: '#ff5d5d',
    },
    {
      name: 'Flashcards',
      description: 'Learn anything, retain everything.',
      color: 'accent-blue',
      bgColor: '#5da9ff',
    },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-xs font-medium uppercase tracking-widest text-text-secondary">Our Apps</h2>
          <h3 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Apps we&apos;ve built and scaled
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group border border-border bg-surface p-6 transition hover:border-opacity-100 sm:p-8"
            >
              <div
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: app.bgColor }}
              >
                <div className="text-lg font-bold text-background">{app.name.charAt(0)}</div>
              </div>
              <h4 className="text-lg font-bold text-foreground">{app.name}</h4>
              <p className="mt-2 text-sm text-text-secondary">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
