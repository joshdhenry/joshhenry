import "./App.css";
import {
  Parallax,
  // ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";

// import bubbleImage from "./assets/bubble-sophie-and-clover.jpg";
// import egyptImage from "./assets/egypt.jpg";
import About from "./About/component";
import bigSmashImage from "./assets/portfolio-big-smash-software-website.jpg";
import myFishPalImage from "./assets/portfolio-my-fish-pal.jpg";
import NavigationBar from "./NavigationBar/component";
import Portfolio from "./Portfolio/component";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavigationBar />
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

        <Portfolio />

        <About />

        <div>Completed Projects</div>
        <div>vertical with linear x offsets (project pictures)</div>
        <div style={{ height: "5000px" }} />
        <div>Contact me</div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
