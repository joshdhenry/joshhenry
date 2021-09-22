import PropTypes from 'prop-types'

import styles from './styles.js'

const ButtonComponent = ({ children, onClick }) => {
  return (
    <div onClick={onClick} style={styles.button}>
      {children}
    </div>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

ButtonComponent.defaultProps = {
  onClick() {},
}

export default ButtonComponent
