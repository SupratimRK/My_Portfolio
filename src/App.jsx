import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero';

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 overflow-y-scroll bg-bg-color scroll-smooth'>
        <div className='h-screen'>
          <Navbar />
          <Hero/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
