import About from '../About'
import Contact from '../Contact'
import NavigationBar from '../NavigationBar'
import Pitch from '../Pitch'
import Portfolio from '../Portfolio'

const Home = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Pitch />
      <Portfolio />
      <About />
      <div style={{ height: '500px' }} />
      <Contact />
    </div>
  )
}

export default Home
