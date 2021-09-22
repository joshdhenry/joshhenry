import bigSmashImage from '../../assets/images/portfolio/portfolio-big-smash-software-website.jpg'
import botWebsiteImage from '../../assets/images/portfolio/portfolio-BOT-website.jpg'
import genConImage from '../../assets/images/portfolio/portfolio-gencon.png'
import metricsDashboardImage from '../../assets/images/portfolio/portfolio-metrics-dashboard.png'
import mindYetiImage from '../../assets/images/portfolio/portfolio-mindYeti.png'
import myFishPalImage from '../../assets/images/portfolio/portfolio-my-fish-pal.jpg'
import k8PlayerImage from '../../assets/images/portfolio/portfolio-player.png'
import selaImage from '../../assets/images/portfolio/portfolio-sela.png'
import skylineTriviaImage from '../../assets/images/portfolio/portfolio-skyline-trivia.jpg'
import spinWheelControlImage from '../../assets/images/portfolio/portfolio-spinwheelcontrol.jpg'
import vistaWeatherImage from '../../assets/images/portfolio/portfolio-vista-weather.jpg'
import zenBuilderImage from '../../assets/images/portfolio/portfolio-zen-builder.jpg'
import { TECHNOLOGIES } from '../../config/constants'

export const PROJECTS = [
  {
    description:
      'A react app that plays interactive presentations that teach social and emotional learning to kids from kindergarten to grade 8. Underlying state management includes Redux and sagas.',
    image: k8PlayerImage,
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.NPM,
      TECHNOLOGIES.AZURE,
    ],
    title: 'Secondstep K-8 Social and Emotional Learning Lesson Player',
  },
  {
    description:
      'A react app that enables adults to master social emotional learning on their browser. Uses REST endpooints and Redux to provide interactivity to the user.',
    image: selaImage,
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.NPM,
      TECHNOLOGIES.AZURE,
    ],
    title: 'Secondstep Social and Emotional Learning Lesson Player for Adults',
  },
  {
    description:
      'A React Native app for mobile and web that delivers mindfulness sessions suited for children. Developed the in-app meditation session player, a fully-featured media player with closed-captioning capability. Integrated and managed a variety of services for the backend and frontend, including Amazon Web Services and Google App Engine.',
    image: mindYetiImage,
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.REACT_NATIVE,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.NPM,
      TECHNOLOGIES.GO,
      // Google apps
    ],
    title: 'Mind Yeti meditation app',
  },
  {
    description:
      "A cross-platform React Native app developed from the ground-up for a 50-year strong annual board-gaming convention with over 60,000 in attendance. Offline-first app that downloads, stores and queries ~20k convention events using Realm and Lunr.js. App communicates with REST endpoints to authenticate and obtain schedule data, event data, latest app styles, and more. Event hosts can view their schedule and use the camera to scan event attendees' badges and admit them entry into e-ticketed events.",
    image: genConImage,
    technologies: [
      TECHNOLOGIES.REACT_NATIVE,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.NPM,
      // TECHNOLOGIES.ANDROID_STUDIO,
      TECHNOLOGIES.COCOAPODS,
      TECHNOLOGIES.JAVA,
      TECHNOLOGIES.OBJECTIVE_C,
      TECHNOLOGIES.XCODE,
    ],
    title: 'GenCon app',
  },
  {
    description:
      'An iOS app designed to help aquarists keep track of their aquarium and its inhabitants. Utilizes Core Data to let the user create aquarium profiles and log all activities related to it. Uses the iOS-Charts library to visualize important changes in the aquarium’s chemistry levels.',
    image: myFishPalImage,
    technologies: [
      TECHNOLOGIES.SWIFT,
      TECHNOLOGIES.PHOTOSHOP,
      TECHNOLOGIES.XCODE,
    ],
    title: 'My Fish Pal app',
  },
  {
    description:
      'A meditation and relaxation timer that lets the user to choose a duration, background sound, and drag & drop checkpoint sound effects onto a timeline. Uses Core Data and iCloud to store saved meditations and maintain the user’s history. Implements Apple Health features by writing mindfulness minutes via HealthKit.',
    image: zenBuilderImage,
    technologies: [
      TECHNOLOGIES.OBJECTIVE_C,
      TECHNOLOGIES.PHOTOSHOP,
      TECHNOLOGIES.XCODE,
    ],
    title: 'Zen Builder app',
  },
  {
    description:
      'A beautiful and super-accurate weather app for iPhone and iPad. Check the local weather forecast or select any city in the world using the Forecast.io API. In addition to weather conditions, Vista Weather also beautifully displays photos crowd-sourced from your location using the Google Places API.',
    image: vistaWeatherImage,
    technologies: [TECHNOLOGIES.SWIFT, TECHNOLOGIES.XCODE],
    title: 'Vista Weather app',
  },
  {
    description:
      'In this enjoyable trivia game for iOS created with Swift and Xcode, you are presented with scenes of city skylines from across the world. Be a jet-setter and guess them all correct to fly around the world. Get them wrong and you might lose your passport! This app relies heavily on Sprite Kit.',
    image: skylineTriviaImage,
    technologies: [
      TECHNOLOGIES.SWIFT,
      TECHNOLOGIES.PHOTOSHOP,
      TECHNOLOGIES.XCODE,
    ],
    title: 'Skylines Trivia app',
  },
  {
    description:
      'An inertial spinning wheel UI control written in Swift that allows selection of an item. A derivation, port, and enhancement based loosely on a similar existing Objective-C CocoaPod named SMWheelControl. Uses IBInspectable properties to let developers easily configure the UI control from Interface ',
    image: spinWheelControlImage,
    technologies: [TECHNOLOGIES.SWIFT, TECHNOLOGIES.COCOAPODS],
    title: 'Spin Wheel Control CocoaPod',
  },
  {
    description:
      'Formed and founded my own independent software company to deliver quality iOS apps written in Swift and Objective-C, along with brilliant websites and expert consultation. Four apps, one framework, and seven websites have been constructed under the Big Smash umbrella.',
    image: bigSmashImage,
    technologies: [],
    title: 'Big Smash Software, LLC.',
  },
  {
    description:
      'Implemented a Google Apps infrastructure to provide the Board of Trustees with an online portal to access collaborative file sharing, email communication, and public discussion.',
    image: botWebsiteImage,
    technologies: [],
    title: 'Central Coop Board of Trustees Website',
  },
  {
    description:
      'Designed and programmed iPad status boards for employees to see at-a-glance live sales history, customer counts, and relevant information to inform and motivate. Coded an internal website for employees to give kudos to fellow associates and have them displayed on the status board. Harnessed C# and the iTextSharp 3rd party library to enable the output of SQL queries to a formatted PDF file.',
    image: metricsDashboardImage,
    technologies: ['php'],
    title: 'Central Coop Metrics dashboard',
  },
]
