import NavigationBarItem from '../NavigationBarItem'

import { ABOUT, CONTACT, NAME, PITCH, PORTFOLIO } from './constants'
import styles from './styles'

const NavigationBarComponent = () => {
  return (
    <div className="NavigationBar" style={styles.wrapper}>
      <div>
        <NavigationBarItem navigateTo={PITCH} text={NAME} />
      </div>
      <div>
        <NavigationBarItem navigateTo={ABOUT} text={ABOUT} />
        <NavigationBarItem navigateTo={PORTFOLIO} text={PORTFOLIO} />
        <NavigationBarItem navigateTo={CONTACT} text={CONTACT} />
      </div>
    </div>
  )
}

export default NavigationBarComponent
