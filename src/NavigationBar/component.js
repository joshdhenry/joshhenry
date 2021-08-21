import { ABOUT, CONTACT, PITCH, PORTFOLIO } from './constants'
import styles from './styles'

const NavigationBar = () => {
  const onClick = (className) => {
    const element = document.getElementsByClassName(className)[0]

    element?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="NavigationBar" style={styles.wrapper}>
      <span onClick={() => onClick(PITCH)}>Josh Henry</span>
      <span onClick={() => onClick(ABOUT)} style={styles.link}>
        {ABOUT}
      </span>
      <span onClick={() => onClick(PORTFOLIO)} style={styles.link}>
        {PORTFOLIO}
      </span>
      <span onClick={() => onClick(CONTACT)} style={styles.link}>
        {CONTACT}
      </span>
    </div>
  )
}

export default NavigationBar
