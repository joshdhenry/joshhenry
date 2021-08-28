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
        description={'blah'}
        image={myFishPalImage}
        technologies={[
          TECHNOLOGIES.REACT_NATIVE,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.NPM,
          // TECHNOLOGIES.ANDROID_STUDIO,
          TECHNOLOGIES.COCOAPODS,
          TECHNOLOGIES.JAVA,
          TECHNOLOGIES.OBJECTIVE_C,
          TECHNOLOGIES.XCODE,
        ]}
        title={'GenCon app'}
      />

      <PortfolioItem
        description={
          'An iOS app designed to help aquarists keep track of their aquarium and its inhabitants. Utilizes Core Data to let the user create aquarium profiles and log all activities related to it. Uses the iOS-Charts library to visualize important changes in the aquarium’s chemistry levels.'
        }
        image={myFishPalImage}
        technologies={[
          TECHNOLOGIES.SWIFT,
          TECHNOLOGIES.PHOTOSHOP,
          TECHNOLOGIES.XCODE,
        ]}
        title={'My Fish Pal app'}
      />

      <PortfolioItem
        description={
          'Zen Builder was my first app to be built using the Objective-C language. This fully-featured meditation timer boasts many features, such as a split view controller for iPad support, iCloud synchronization, and Healthkit support to name a few.'
        }
        image={zenBuilderImage}
        technologies={[
          TECHNOLOGIES.OBJECTIVE_C,
          TECHNOLOGIES.PHOTOSHOP,
          TECHNOLOGIES.XCODE,
        ]}
        title={'Zen Builder app'}
      />

      <PortfolioItem
        description={
          'A beautiful and super-accurate weather app for iPhone and iPad. Check the local weather forecast or select any city in the world using the Forecast.io API. In addition to weather conditions, Vista Weather also beautifully displays photos crowd-sourced from your location using the Google Places API.'
        }
        image={vistaWeatherImage}
        technologies={[TECHNOLOGIES.SWIFT, TECHNOLOGIES.XCODE]}
        title={'Vista Weather app'}
      />

      <PortfolioItem
        description={
          'In this enjoyable trivia game for iOS created with Swift and Xcode, you are presented with scenes of city skylines from across the world. Be a jet-setter and guess them all correct to fly around the world. Get them wrong and you might lose your passport! This app relies heavily on Sprite Kit.'
        }
        image={skylineTriviaImage}
        technologies={[
          TECHNOLOGIES.SWIFT,
          TECHNOLOGIES.PHOTOSHOP,
          TECHNOLOGIES.XCODE,
        ]}
        title={'Skylines Trivia app'}
      />

      <PortfolioItem
        description={
          'An inertial spinning wheel UI control written in Swift that allows selection of an item.'
        }
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
