import Slide from 'react-reveal/Fade'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import bigSmashImage from '../../assets/images/portfolio-big-smash-software-website.jpg'
import myFishPalImage from '../../assets/images/portfolio-my-fish-pal.jpg'
// import bubbleImage from "./assets/bubble-sophie-and-clover.jpg";
// import egyptImage from "./assets/egypt.jpg";

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
        <h1>60 second sell</h1>
        <h1>Mobile development - phone</h1>
        <h1>Web development - PC</h1>
        <h1>Attention to UI detail - Magnifying glass</h1>
        <h1>Quality and big free - Bug</h1>
        <h1>Agile process - List</h1>
      </Slide>
    </div>
  )
}

export default Pitch
