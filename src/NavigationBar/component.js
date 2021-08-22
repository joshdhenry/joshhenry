import PropTypes from 'prop-types'

import { ABOUT, CONTACT, PORTFOLIO } from './constants'
import styles from './styles'

const NavigationBarComponent = ({
  navigateToAbout,
  navigateToContact,
  navigateToPitch,
  navigateToPortfolio,
}) => {
  return (
    <div className="NavigationBar" style={styles.wrapper}>
      <span onClick={navigateToPitch}>Josh Henry</span>
      <span onClick={navigateToAbout} style={styles.link}>
        {ABOUT}
      </span>
      <span onClick={navigateToPortfolio} style={styles.link}>
        {PORTFOLIO}
      </span>
      <span onClick={navigateToContact} style={styles.link}>
        {CONTACT}
      </span>
    </div>
  )
}

NavigationBarComponent.propTypes = {
  navigateToAbout: PropTypes.func,
  navigateToContact: PropTypes.func,
  navigateToPitch: PropTypes.func,
  navigateToPortfolio: PropTypes.func,
}

NavigationBarComponent.defaultProps = {
  navigateToAbout() {},
  navigateToContact() {},
  navigateToPitch() {},
  navigateToPortfolio() {},
}

export default NavigationBarComponent
