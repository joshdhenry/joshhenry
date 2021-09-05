import PropTypes from 'prop-types'

import styles from './styles.js'

const ButtonComponent = ({ children }) => {
  return <div style={styles.button}>{children}</div>
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
}

export default ButtonComponent
