import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'

import styles from './styles'

const PitchItem = ({ image, title, description }) => {
  return (
    <div className={'PitchItem'} style={styles.wrapper}>
      <div style={{ backgroundColor: 'lightGrey' }}>
        <Roll bottom>
          <img src={image} style={styles.pitchImage} />
          <h1>{title}</h1>
        </Roll>

        <Fade>
          <div>{description}</div>
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
