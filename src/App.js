import "./App.css";
import "./NavigationBar/component";
import NavigationBar from "./NavigationBar/component";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import bubbleImage from './assets/bubble-sophie-and-clover.jpg';
import egyptImage from './assets/egypt.jpg';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <NavigationBar />
          <img src={bubbleImage}/>
        <ParallaxBanner
          className="your-class"
          layers={[
              {
                  image: egyptImage,
                  amount: 0.5,
              },
              {
                  image: egyptImage,
                  amount: 0.75,
              },
          ]}
          style={{
              height: '500px',
          }}
        >
          <h1>Banner Children</h1>
          <div>
            I'm a full-stack software engineer with an emphasis on mobile and
            web technologies, currently residing in Seattle, WA.
          </div>

          <div>
            I develop custom software products built to clients' specifications.
            I've helped companies small and large realize their visions by
            creating beautiful software experiences and publishing them to the
            world.
          </div>

          <div>
            I am also president and developer of my own software company,{" "}
            <a href="http://www.bigsmashsoftware.com/" target="_blank">
              Big Smash, LLC
            </a>
            ,and have developed <a href="portfolio.html#apps">four iOS apps</a>,
            an <a href="spinwheelcontrol.html">iOS CocoaPod framework</a>, and{" "}
            <a href="portfolio.html#websites">several websites</a>.
          </div>
          <div>
            I love finding new ways to leverage technology to meet the world's
            needs. Delivering a clean, simple, and high-quality experience to
            the end-user is my passion.
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
}

export default App;
