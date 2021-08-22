import About from '../About'
import Contact from '../Contact'
import NavigationBar from '../NavigationBar'
import Pitch from '../Pitch'
import Portfolio from '../Portfolio'
import Tools from '../Tools'

const Home = () => {
  return (
    <div className="App">
      <NavigationBar />
      <div style={{ height: '500px' }} />
      <Pitch />
      <div style={{ height: '500px' }} />
      <Portfolio />
      <div style={{ height: '500px' }} />
      <About />
      <div style={{ height: '500px' }} />
      <Tools />
      <div style={{ height: '500px' }} />
      <Contact />
    </div>
  )
}

export default Home
