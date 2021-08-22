import bigSmashImage from '../../assets/portfolio-big-smash-software-website.jpg'
import botWebsiteImage from '../../assets/portfolio-BOT-website.jpg'
import metricsDashboardImage from '../../assets/portfolio-metrics-dashboard.png'
import myFishPalImage from '../../assets/portfolio-my-fish-pal.jpg'
import skylineTriviaImage from '../../assets/portfolio-skyline-trivia.jpg'
import spinWheelControlImage from '../../assets/portfolio-spinwheelcontrol.jpg'
import vistaWeatherImage from '../../assets/portfolio-vista-weather.jpg'
import zenBuilderImage from '../../assets/portfolio-zen-builder.jpg'
import PortfolioItem from '../PortfolioItem'

import { TECHNOLOGIES } from './constants'

const Portfolio = () => {
  return (
    <div className={'Portfolio'}>
      <div>Completed Projects</div>
      <PortfolioItem
        description={'K8 Player'}
        image={vistaWeatherImage}
        technologies={[TECHNOLOGIES.JAVASCRIPT]}
      />
      <PortfolioItem
        description={'Scrollable Player'}
        image={vistaWeatherImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'My Fish Pal ......'}
        image={myFishPalImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'Zen Builder'}
        image={zenBuilderImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'Vista Weather'}
        image={vistaWeatherImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'SkylinesTrivia'}
        image={skylineTriviaImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'Spin Wheel Control CocoaPod'}
        image={spinWheelControlImage}
        technologies={[]}
      />
      <PortfolioItem
        description={
          'Formed and founded my own independent software company ..........'
        }
        image={bigSmashImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'Central Coop Board of Trustees Website'}
        image={botWebsiteImage}
        technologies={[]}
      />
      <PortfolioItem
        description={'Metrics dashboard'}
        image={metricsDashboardImage}
        technologies={[]}
      />

      <div>vertical with linear x offsets (project pictures)</div>
      <div>
        OR INSTEAD project pic comes in from left of screen, tools I used for it
        come in from the right, and text description fades in on scroll
      </div>
    </div>
  )
}

export default Portfolio
