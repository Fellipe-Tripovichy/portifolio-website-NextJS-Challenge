"use client"
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection/>
      <SkillsSection/>
      <ProjectSection/>
    </main>
  )
}
