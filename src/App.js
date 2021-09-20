import './App.css'
import React, { useEffect } from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './components/Home/component'

console.log('Initializing application...')

function App() {
  useEffect(() => {
    document.title = 'Josh Henry'
  }, [])

  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  )
}

export default App
