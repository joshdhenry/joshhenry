import { PropTypes } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import cocoaPodsImage from '../../assets/images/technologies/cocoapodsIcon.png'
import javaImage from '../../assets/images/technologies/javaicon.png'
import javscriptImage from '../../assets/images/technologies/javascriptIcon.png'
import nodeImage from '../../assets/images/technologies/nodeIcon.png'
import npmImage from '../../assets/images/technologies/npm.png'
import objectiveCImage from '../../assets/images/technologies/objectiveCIcon.png'
import photoshopImage from '../../assets/images/technologies/photoshopIcon.png'
import reactImage from '../../assets/images/technologies/react.png'
import reactNativeImage from '../../assets/images/technologies/reactNative.png'
import swiftImage from '../../assets/images/technologies/swift.png'
import webStormImage from '../../assets/images/technologies/webstorm.png'
import { TECHNOLOGIES } from '../../config/constants'

import styles from './styles'

const Portfolio = ({ image, description, technologies, title }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
      <Parallax
        className="custom-class"
        tagOuter="figure"
        x={['-200px', '-10px']}
      >
        <img src={image} />
      </Parallax>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
        {technologies.map((technology) => {
          switch (technology) {
            case TECHNOLOGIES.JAVASCRIPT:
              return <img src={javscriptImage} style={styles.technology} />
            case TECHNOLOGIES.NPM:
              return <img src={npmImage} style={styles.technology} />
            case TECHNOLOGIES.JAVA:
              return <img src={javaImage} style={styles.technology} />
            case TECHNOLOGIES.COCOAPODS:
              return <img src={cocoaPodsImage} style={styles.technology} />
            case TECHNOLOGIES.PHOTOSHOP:
              return <img src={photoshopImage} style={styles.technology} />
            case TECHNOLOGIES.NODE:
              return <img src={nodeImage} style={styles.technology} />
            case TECHNOLOGIES.WEBSTORM:
              return <img src={webStormImage} style={styles.technology} />
            case TECHNOLOGIES.OBJECTIVE_C:
              return <img src={objectiveCImage} style={styles.technology} />
            case TECHNOLOGIES.SWIFT:
              return <img src={swiftImage} style={styles.technology} />
            case TECHNOLOGIES.REACT_NATIVE:
              return <img src={reactNativeImage} style={styles.technology} />
            case TECHNOLOGIES.REACT:
              return <img src={reactImage} style={styles.technology} />
            default:
              return
          }
        })}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
}

export default Portfolio
