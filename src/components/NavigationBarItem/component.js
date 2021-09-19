import PropTypes from 'prop-types'

import { default as viewportHooks } from '../../hooks/useViewport'

import desktopStyles from './styles'
import mobileStyles from './styles.mobile.js'

const NavigationBarItemComponent = ({ navigate, text }) => {
  const { isMobile } = viewportHooks.useViewport()
  const styles = isMobile ? mobileStyles : desktopStyles

  return (
    <span onClick={navigate} style={styles.link}>
      {text}
    </span>
  )
}

NavigationBarItemComponent.propTypes = {
  navigate: PropTypes.func,
  text: PropTypes.string,
}

NavigationBarItemComponent.defaultProps = {
  navigate() {},
  text() {},
}

export default NavigationBarItemComponent
