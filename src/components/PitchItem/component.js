import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'

import { default as viewportHooks } from '../../hooks/useViewport'
import Body from '../Body'
import Header from '../Header'

import desktopStyles from './styles'
import mobileStyles from './styles.mobile'

const PitchItem = ({ image, title, description }) => {
  const { width } = viewportHooks.useViewport()
  const styles = width > 640 ? desktopStyles : mobileStyles

  return (
    <div className={'PitchItem'} style={styles.wrapper}>
      <div>
        <Roll bottom>
          <img src={image} style={styles.pitchImage} />
        </Roll>
        <Fade cascade>
          <Header>{title}</Header>
          <Body>{description}</Body>
        </Fade>
      </div>
    </div>
  )
}

PitchItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
}

export default PitchItem
