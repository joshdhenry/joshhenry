import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Marquee from '../Marquee'
import NavigationBar from '../NavigationBar'
import Pitch from '../Pitch'
import Portfolio from '../Portfolio'
import Tools from '../Tools'

import styles from './styles'
const Home = () => {
  return (
    <div className="App" style={styles.wrapper}>
      <NavigationBar />
      <Marquee />
      <Pitch />
      <div style={{ height: '500px' }} />
      <Portfolio />
      <div style={{ height: '500px' }} />
      <About />
      <div style={{ height: '500px' }} />
      <Tools />
      <div style={{ height: '500px' }} />
      <Contact />
      <div style={{ height: '500px' }} />
      <Footer />
    </div>
  )
}

export default Home
