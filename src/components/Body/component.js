import PropTypes from 'prop-types'

import styles from './styles.js'

const BodyComponent = ({ children }) => {
  return <div style={styles.text}>{children}</div>
}

BodyComponent.propTypes = {
  children: PropTypes.node,
}

export default BodyComponent
