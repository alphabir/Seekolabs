export default function Stats() {
  const stats = [
    { value: '150M+', label: 'Downloads' },
    { value: '45M+', label: 'Monthly Active' },
    { value: '12', label: 'Live Apps' },
    { value: '2018', label: 'Founded' },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 sm:gap-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
