import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './components/Home/component'

console.log('Initializing application...')

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  )
}

export default App
