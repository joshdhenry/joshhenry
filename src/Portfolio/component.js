import { Parallax } from 'react-scroll-parallax'

import bigSmashImage from '../assets/portfolio-big-smash-software-website.jpg'
import botWebsiteImage from '../assets/portfolio-BOT-website.jpg'
import metricsDashboardImage from '../assets/portfolio-metrics-dashboard.png'
import myFishPalImage from '../assets/portfolio-my-fish-pal.jpg'
import skylineTriviaImage from '../assets/portfolio-skyline-trivia.jpg'
import spinWheelControlImage from '../assets/portfolio-spinwheelcontrol.jpg'
import vistaWeatherImage from '../assets/portfolio-vista-weather.jpg'
import zenBuilderImage from '../assets/portfolio-zen-builder.jpg'

const Portfolio = () => {
  return (
    <div className={'Portfolio'}>
      <div>Completed Projects</div>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={bigSmashImage} />
      </Parallax>
      <Parallax
        className="custom-class2"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={myFishPalImage} />
      </Parallax>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={botWebsiteImage} />
      </Parallax>
      <Parallax
        className="custom-class2"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={metricsDashboardImage} />
      </Parallax>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={skylineTriviaImage} />
      </Parallax>
      <Parallax
        className="custom-class2"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={spinWheelControlImage} />
      </Parallax>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={zenBuilderImage} />
      </Parallax>
      <Parallax
        className="custom-class2"
        tagOuter="figure"
        x={[-70, 0]}
        y={[-70, 0]}
      >
        <img src={metricsDashboardImage} />
      </Parallax>
      <div>vertical with linear x offsets (project pictures)</div>
      <div>
        OR INSTEAD project pic comes in from left of screen, tools I used for it
        come in from the right, and text description fades in on scroll
      </div>
      <div>Tools I use</div>
      <div>Webstorm, photoshop, bash, npm, node, javascript</div>
    </div>
  )
}

export default Portfolio
