import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Portfolio from '@/components/portfolio'
import HowWeBuild from '@/components/how-we-build'
import Careers from '@/components/careers'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Stats />
      <Portfolio />
      <HowWeBuild />
      <Careers />
      <Footer />
    </main>
  )
}
