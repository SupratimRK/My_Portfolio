'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='z-0 bg-gradient-to-br from-slate-50 to-blue-50 scroll-smooth min-h-screen'>
      <div className='min-h-screen'>
        <Navbar />
        <Hero/>
      </div>
      <div className="mt-10">
        <About/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  )
}