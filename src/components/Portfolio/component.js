import bigSmashImage from '../../assets/images/portfolio-big-smash-software-website.jpg'
import botWebsiteImage from '../../assets/images/portfolio-BOT-website.jpg'
import metricsDashboardImage from '../../assets/images/portfolio-metrics-dashboard.png'
import myFishPalImage from '../../assets/images/portfolio-my-fish-pal.jpg'
import skylineTriviaImage from '../../assets/images/portfolio-skyline-trivia.jpg'
import spinWheelControlImage from '../../assets/images/portfolio-spinwheelcontrol.jpg'
import vistaWeatherImage from '../../assets/images/portfolio-vista-weather.jpg'
import zenBuilderImage from '../../assets/images/portfolio-zen-builder.jpg'
import { TECHNOLOGIES } from '../../config/constants'
import PortfolioItem from '../PortfolioItem'

const Portfolio = () => {
  return (
    <div className={'Portfolio'}>
      <div>Completed Projects</div>
      <PortfolioItem
        description={'K8 Player'}
        image={vistaWeatherImage}
        technologies={[
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.NPM,
          TECHNOLOGIES.AZURE,
        ]}
        title={'Secondstep K-8 lesson player TEST'}
      />

      <PortfolioItem
        description={'Scrollable Player'}
        image={vistaWeatherImage}
        technologies={[
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.NPM,
          TECHNOLOGIES.AZURE,
        ]}
        title={'Secondstep Social and Emotional Learning Lesson Player'}
      />

      <PortfolioItem
        description={'Mind Yeti'}
        image={vistaWeatherImage}
        technologies={[
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.REACT_NATIVE,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.NPM,
          TECHNOLOGIES.GO,
          // Google apps
        ]}
        title={'Mind Yeti meditation app'}
      />

      <PortfolioItem
        description={'My Fish Pal ......'}
        image={myFishPalImage}
        technologies={[TECHNOLOGIES.SWIFT, TECHNOLOGIES.PHOTOSHOP]}
        title={'My Fish Pal app'}
      />

      <PortfolioItem
        description={'Zen Builder'}
        image={zenBuilderImage}
        technologies={[TECHNOLOGIES.OBJECTIVE_C, TECHNOLOGIES.PHOTOSHOP]}
        title={'Zen Builder app'}
      />

      <PortfolioItem
        description={'Vista Weather'}
        image={vistaWeatherImage}
        technologies={[TECHNOLOGIES.SWIFT]}
        title={'Vista Weather app'}
      />

      <PortfolioItem
        description={'SkylinesTrivia'}
        image={skylineTriviaImage}
        technologies={[TECHNOLOGIES.SWIFT, TECHNOLOGIES.PHOTOSHOP]}
        title={'Skylines Trivia app'}
      />

      <PortfolioItem
        description={'Spin Wheel Control CocoaPod'}
        image={spinWheelControlImage}
        technologies={[TECHNOLOGIES.SWIFT, TECHNOLOGIES.COCOAPODS]}
        title={'Spin Wheel Control CocoaPod'}
      />

      <PortfolioItem
        description={
          'Formed and founded my own independent software company ..........'
        }
        image={bigSmashImage}
        technologies={[]}
        title={'Big Smash Software, LLC.'}
      />

      <PortfolioItem
        description={'Central Coop Board of Trustees Website'}
        image={botWebsiteImage}
        technologies={[]}
        title={'Big Smash Software, LLC.'}
      />

      <PortfolioItem
        description={'Metrics dashboard'}
        image={metricsDashboardImage}
        technologies={['php']}
        title={'Big Smash Software, LLC.'}
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
