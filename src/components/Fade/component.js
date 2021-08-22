import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

const FadeComponent = ({ children }) => {
  return <Fade cascade>{children}</Fade>
}

FadeComponent.propTypes = {
  children: PropTypes.node,
}

export default FadeComponent
