import Slide from 'react-reveal/Slide'

import { default as viewportHooks } from '../../hooks/useViewport'
import PitchItem from '../PitchItem'

import { PITCHES } from './constants'
import desktopStyles from './styles'
import mobileStyles from './styles.mobile'

const Pitch = () => {
  const { isMobile } = viewportHooks.useViewport()
  const styles = isMobile ? mobileStyles : desktopStyles

  const getPitches = () => {
    let pitchCollectionLeft = []
    let pitchCollectionRight = []

    PITCHES.forEach((pitch, index) => {
      if (index % 2) {
        pitchCollectionLeft.push(
          <PitchItem
            description={pitch.description}
            image={pitch.image}
            title={pitch.title}
          />,
        )
      } else {
        pitchCollectionRight.push(
          <PitchItem
            description={pitch.description}
            image={pitch.image}
            title={pitch.title}
          />,
        )
      }
    })

    return (
      <div style={styles.wrapper}>
        <div style={styles.pitch}>{pitchCollectionLeft}</div>
        <div style={styles.pitch}>{pitchCollectionRight}</div>
      </div>
    )
  }

  return (
    <div className={'Pitch'}>
      <Slide cascade left>
        {getPitches()}
      </Slide>
    </div>
  )
}

export default Pitch
