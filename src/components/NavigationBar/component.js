import NavigationBarItem from '../NavigationBarItem'

import { ABOUT, CONTACT, PITCH, PORTFOLIO } from './constants'
import styles from './styles'

const NavigationBarComponent = () => {
  return (
    <div className="NavigationBar" style={styles.wrapper}>
      <NavigationBarItem navigateTo={PITCH} text={'Josh Henry'} />
      <NavigationBarItem navigateTo={ABOUT} text={ABOUT} />
      <NavigationBarItem navigateTo={PORTFOLIO} text={PORTFOLIO} />
      <NavigationBarItem navigateTo={CONTACT} text={CONTACT} />
    </div>
  )
}

export default NavigationBarComponent
