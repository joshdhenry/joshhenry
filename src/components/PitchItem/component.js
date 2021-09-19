import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'

import { default as viewportHooks } from '../../hooks/useViewport'
import Body from '../Body'
import Header from '../Header'

import desktopStyles from './styles'
import mobileStyles from './styles.mobile'

const PitchItem = ({ image, title, description }) => {
  const { isMobile } = viewportHooks.useViewport()
  const styles = isMobile ? mobileStyles : desktopStyles

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
