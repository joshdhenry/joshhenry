import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'

import Body from '../Body'
import Header from '../Header'

import styles from './styles'

const PitchItem = ({ image, title, description }) => {
  return (
    <div className={'PitchItem'} style={styles.wrapper}>
      {/*<div style={{ backgroundColor: 'lightGrey' }}>*/}
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
