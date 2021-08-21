import { Parallax } from "react-scroll-parallax";

import bigSmashImage from "../assets/portfolio-big-smash-software-website.jpg";
import myFishPalImage from "../assets/portfolio-my-fish-pal.jpg";

// import bubbleImage from "./assets/bubble-sophie-and-clover.jpg";
// import egyptImage from "./assets/egypt.jpg";

const Pitch = () => {
  return (
    <div>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={bigSmashImage} />
      </Parallax>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={myFishPalImage} />
      </Parallax>
      {/*<ParallaxBanner*/}
      {/*  className="your-class"*/}
      {/*  layers={[*/}
      {/*    {*/}
      {/*      image: bigSmashImage,*/}
      {/*      amount: 0.1,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      image: myFishPalImage,*/}
      {/*      amount: 0.75,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  // styleOuter={{*/}
      {/*  //   flex:1,*/}
      {/*  //   justifyContent: "center",*/}
      {/*  //   width: '600px',*/}
      {/*  //   backgroundColor: 'red',*/}
      {/*  // }}*/}
      {/*  style={{*/}
      {/*    height: "200px",*/}
      {/*    width: "500px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Banner Children*/}
      {/*</ParallaxBanner>*/}

      <h1>60 second sell</h1>
      <h1>Mobile development</h1>
      <h1>Web development</h1>
      <h1>Attention to Ui detail</h1>
      <h1>Quality and big free</h1>
      <h1>Agile process</h1>
      <h1>Resume</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Pitch;
