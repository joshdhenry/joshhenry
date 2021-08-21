import styles from './styles'

const NavigationBar = () => {
  return (
    <div className="NavigationBar" style={styles.wrapper}>
      Josh Henry <span style={styles.link}>About</span>{' '}
      <span style={styles.link}>Portfolio</span>{' '}
      <span style={styles.link}>Contact</span>
    </div>
  )
}

export default NavigationBar
