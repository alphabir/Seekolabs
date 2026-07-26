export default function HowWeBuild() {
  const steps = [
    {
      number: '01',
      title: 'Shared Build Template',
      description: 'Start with a proven foundation that accelerates development.',
    },
    {
      number: '02',
      title: 'Soft Launch & Validate',
      description: 'Test with real users and iterate based on data.',
    },
    {
      number: '03',
      title: 'Scale the Winners',
      description: 'Deploy successful apps to millions of users globally.',
    },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-xs font-medium uppercase tracking-widest text-text-secondary">Our Process</h2>
          <h3 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How we build
          </h3>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-4xl font-bold text-text-secondary">{step.number}</div>
              <h4 className="mt-4 text-lg font-bold text-foreground">{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
