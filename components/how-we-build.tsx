export default function HowWeBuild() {
  const steps = [
    {
      number: '01',
      title: 'Create',
      description: 'We collaborate with creative minds to ideate and prototype innovative mobile experiences.',
    },
    {
      number: '02',
      title: 'Validate',
      description: 'We soft launch and gather user data to understand what truly resonates.',
    },
    {
      number: '03',
      title: 'Scale',
      description: 'We deploy winning apps globally, optimizing for maximum engagement and retention.',
    },
  ]

  return (
    <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our approach
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            We&apos;ve perfected the process of building apps that users love. Here&apos;s how we do it.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-foreground">
                <span className="text-lg font-bold text-foreground">{step.number}</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
