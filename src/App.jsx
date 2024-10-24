import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 overflow-y-hidden bg-black scroll-smooth'>
        <div className='h-screen'>
          <Navbar />
          <Hero/>
        </div>
        <About/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
