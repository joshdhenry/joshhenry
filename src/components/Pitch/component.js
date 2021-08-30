import Slide from 'react-reveal/Slide'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import bigSmashImage from '../../assets/images/portfolio-big-smash-software-website.jpg'
import myFishPalImage from '../../assets/images/portfolio-my-fish-pal.jpg'
import PitchItem from '../PitchItem'

import { PITCHES } from './constants'

const Pitch = () => {
  return (
    <div className={'Pitch'}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'red',
          // justifyContent: 'center',
        }}
      >
        <Parallax
          className="custom-class"
          tagOuter="figure"
          x={[-50, 0]}
          // y={[-70, 0]}
        >
          <img src={bigSmashImage} />
        </Parallax>
        <Parallax
          className="custom-class2"
          tagOuter="figure"
          x={[-50, 0]}
          // y={[-70, 0]}
        >
          <img src={myFishPalImage} />
        </Parallax>
      </div>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: bigSmashImage,
            amount: 0.1,
          },
          {
            image: myFishPalImage,
            amount: 0.75,
          },
        ]}
        // styleOuter={{
        //   flex:1,
        //   justifyContent: "center",
        //   width: '600px',
        //   backgroundColor: 'red',
        // }}
        style={{
          height: '200px',
          width: '500px',
        }}
      >
        Banner Children
      </ParallaxBanner>

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
