import PropTypes from 'prop-types'

import styles from './styles'

const NavigationBarItemComponent = ({ navigate, text }) => {
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
