import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './Home/component'

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  )
}

export default App
