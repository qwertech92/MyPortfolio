import { useState, useEffect } from 'react'
import DotIndicator from './components/DotIndicator'
import ShaderBackground from './components/ShaderBackground'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import SendMessageSection from './components/SendMessageSection'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-80px 0px -20% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-surface font-body-md text-on-surface select-none relative">
      <ShaderBackground />
      <DotIndicator activeSection={activeSection} />
      <main className="w-full relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
        <SendMessageSection />
      </main>
      <Footer />
    </div>
  )
}
