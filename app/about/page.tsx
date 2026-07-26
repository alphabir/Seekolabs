import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Seekolabs | Mobile App Studio',
  description: 'Learn about Seekolabs, our mission, values, and the team behind 150M+ app downloads.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance font-bold leading-tight text-foreground">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              We&apos;re building the
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-lime">
              Future of Mobile.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            Since 2018, Seekolabs has been crafting mobile applications that engage millions of users worldwide. Our focus on quality, innovation, and user experience drives everything we do.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">150M+</div>
              <p className="mt-2 text-sm text-text-secondary">Total Downloads</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">45M+</div>
              <p className="mt-2 text-sm text-text-secondary">Monthly Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">12</div>
              <p className="mt-2 text-sm text-text-secondary">Apps Launched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-lime sm:text-5xl">6+</div>
              <p className="mt-2 text-sm text-text-secondary">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                To create mobile applications that bring joy to millions of users while pushing the boundaries of what&apos;s possible in digital entertainment and utility.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                We believe in building apps that people love—not just use. Every decision we make prioritizes user experience, performance, and long-term engagement.
              </p>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <span className="text-accent-lime">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">User-Centric Design</h3>
                    <p className="text-sm text-text-secondary">Every feature is built with users in mind.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-lime">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Quality First</h3>
                    <p className="text-sm text-text-secondary">We never compromise on performance or stability.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-lime">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Continuous Innovation</h3>
                    <p className="text-sm text-text-secondary">We stay ahead of trends and technology.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-lime">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Team Excellence</h3>
                    <p className="text-sm text-text-secondary">We attract and nurture the best talent.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Led by veterans of the mobile gaming industry with a combined 50+ years of experience.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Alex Chen', role: 'CEO & Co-founder', bio: 'Former VP at Voodoo with 15+ years in mobile.' },
              { name: 'Sarah Williams', role: 'CTO & Co-founder', bio: 'Led engineering at SayGames, specialized in scaling.' },
              { name: 'Marcus Johnson', role: 'Creative Director', bio: 'Award-winning game designer from Playrix.' },
              { name: 'Emma Rodriguez', role: 'Head of Product', bio: 'Shipped 8+ games with 100M+ users.' },
              { name: 'James Park', role: 'Operations Lead', bio: 'Business development expert from AppAnnie.' },
              { name: 'Lisa Chen', role: 'Marketing Director', bio: 'Built growth strategies for top 10 apps.' },
            ].map((member, i) => (
              <div key={i} className="rounded-lg border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent-lime">{member.role}</p>
                <p className="mt-3 text-sm text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Ready to work together?</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Let&apos;s create something amazing together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-background sm:px-8 sm:py-4"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
