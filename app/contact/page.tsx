'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    console.log('[v0] Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance font-bold leading-tight text-foreground">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Let&apos;s
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-accent-lime">
              Build Together.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something amazing.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              
              {submitted ? (
                <div className="mt-6 rounded-lg border border-accent-lime bg-surface p-6">
                  <p className="text-lg font-semibold text-accent-lime">Thank you!</p>
                  <p className="mt-2 text-text-secondary">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {error && (
                    <div className="rounded-lg border border-accent-red bg-surface p-4">
                      <p className="text-sm text-accent-red">{error}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-text-secondary focus:border-accent-lime focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-text-secondary focus:border-accent-lime focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-semibold text-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-text-secondary focus:border-accent-lime focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder-text-secondary focus:border-accent-lime focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-lime px-6 py-3 font-semibold text-background transition hover:bg-white"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Info</h2>
              
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Email</h3>
                  <p className="mt-2 text-lg text-foreground">
                    <a href="mailto:hello@seekolabs.com" className="transition hover:text-accent-lime">
                      hello@seekolabs.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Phone</h3>
                  <p className="mt-2 text-lg text-foreground">
                    <a href="tel:+14155551234" className="transition hover:text-accent-lime">
                      +1 (415) 555-1234
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Address</h3>
                  <p className="mt-2 text-lg text-foreground">
                    123 Innovation Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent-lime">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition hover:text-accent-lime"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition hover:text-accent-lime"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition hover:text-accent-lime"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
