import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <div className=' z-0 bg-black scroll-smooth'>
        <div className='min-h-screen'>
          <Navbar />
          <Hero/>
        </div>
        <div className="mt-10">
          <About/>
          <Work/>
          <Skills/>
          <Contact/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
