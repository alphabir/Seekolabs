'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'

const jobs = [
  {
    title: 'Senior iOS Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build next-generation mobile experiences using Swift and iOS frameworks.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Drive product strategy and vision for our flagship mobile applications.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create stunning user interfaces and experiences for millions of users.',
  },
  {
    title: 'Game Analytics Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build analytics systems to understand user behavior and optimize engagement.',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead user acquisition and growth initiatives across mobile platforms.',
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable backend systems supporting millions of daily users.',
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance font-bold leading-tight text-foreground">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Help Us Build
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-lime">
              The Future.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            Join a team of passionate builders creating mobile apps used by millions. We offer competitive pay, great benefits, and the opportunity to make an impact.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Life at Seekolabs</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-4 font-bold text-foreground">Innovation First</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We encourage experimentation and bold ideas that push the boundaries.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-4 font-bold text-foreground">Collaborative Culture</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Work with talented individuals who are passionate about their craft.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">🌱</div>
              <h3 className="mt-4 font-bold text-foreground">Growth Opportunities</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Continuous learning and career development in a fast-paced environment.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">💰</div>
              <h3 className="mt-4 font-bold text-foreground">Competitive Benefits</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Market-rate salary, equity options, health insurance, and more.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">🏠</div>
              <h3 className="mt-4 font-bold text-foreground">Flexibility</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Remote-friendly options and flexible work arrangements.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 font-bold text-foreground">Impact</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Your work directly affects millions of users worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Open Positions</h2>
          <p className="mt-4 text-lg text-text-secondary">
            We&apos;re actively hiring talented people to join our team.
          </p>

          <div className="mt-8 space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg border border-border bg-surface p-6 transition hover:border-foreground hover:bg-surface/80"
                onClick={() => setExpandedJob(expandedJob === index ? null : index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-text-secondary">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="text-2xl text-accent-lime">
                    {expandedJob === index ? '−' : '+'}
                  </div>
                </div>

                {expandedJob === index && (
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-text-secondary">{job.description}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-block border border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-background"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-b border-border px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Join Us</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Compensation</h3>
              <p className="mt-2 text-foreground">Competitive salary packages and equity options to join in our success.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Health & Wellness</h3>
              <p className="mt-2 text-foreground">Comprehensive health insurance and wellness programs.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Learning Budget</h3>
              <p className="mt-2 text-foreground">$2,000 annual professional development and conference budget.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Flexible Work</h3>
              <p className="mt-2 text-foreground">Remote-friendly and flexible scheduling for work-life balance.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Team Events</h3>
              <p className="mt-2 text-foreground">Regular team outings, hackathons, and company celebrations.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">PTO & Holidays</h3>
              <p className="mt-2 text-foreground">Generous paid time off and all major holidays covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Don&apos;t see the right fit?</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Send us your resume and a note about what you&apos;re looking for.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-foreground bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-background sm:px-8 sm:py-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
