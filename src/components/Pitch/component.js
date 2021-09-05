import Slide from 'react-reveal/Slide'

import PitchItem from '../PitchItem'

import { PITCHES } from './constants'

const Pitch = () => {
  return (
    <div className={'Pitch'}>
      <Slide cascade left>
        {PITCHES.map((pitch) => (
          <PitchItem
            description={pitch.description}
            image={pitch.image}
            title={pitch.title}
          />
        ))}
      </Slide>
    </div>
  )
}

export default Pitch
