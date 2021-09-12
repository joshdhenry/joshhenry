import Slide from 'react-reveal/Slide'

import PitchItem from '../PitchItem'

import { PITCHES } from './constants'

const Pitch = () => {
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
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            // backgroundColor: 'red',
          }}
        >
          {pitchCollectionLeft}
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            // backgroundColor: 'green',
          }}
        >
          {pitchCollectionRight}
        </div>
      </div>
    )
  }

  //WORKS
  // PITCHES.map((pitch) => (
  //   <PitchItem
  //     description={pitch.description}
  //     image={pitch.image}
  //     title={pitch.title}
  //   />
  // ))

  return (
    <div className={'Pitch'}>
      <Slide cascade left>
        {getPitches()}
      </Slide>
    </div>
  )
}

export default Pitch
