import PropTypes from 'prop-types'

import styles from './styles.js'

const HeaderComponent = ({ children }) => {
  return <div style={styles.text}>{children}</div>
}

HeaderComponent.propTypes = {
  children: PropTypes.node,
}

export default HeaderComponent
