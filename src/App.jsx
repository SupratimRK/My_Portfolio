import React from 'react'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='items-center justify-center h-screen flex bg-gray-800'>
        <span className='text-white'>Hello Click this button👉👉👉</span>
        <Button className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded' onClick={()=>alert("FUCK YOU MAN!!!🖕🖕🖕")}>Click Click!</Button>
      </div>
    </>
  )
}

export default App
