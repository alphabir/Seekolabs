export default function Stats() {
  const stats = [
    { value: '150M+', label: 'Downloads' },
    { value: '45M+', label: 'Monthly Active Users' },
    { value: '12', label: 'Apps Live' },
    { value: '2018', label: 'Founded' },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start sm:items-center lg:items-start">
              <div className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
