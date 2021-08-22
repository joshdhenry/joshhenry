import { PropTypes } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import cocoaPodsImage from '../../assets/images/technologies/cocoapods.png'
import javaImage from '../../assets/images/technologies/java.png'
import javscriptImage from '../../assets/images/technologies/javaScript.png'
import nodeImage from '../../assets/images/technologies/node.png'
import npmImage from '../../assets/images/technologies/npm.png'
import objectiveCImage from '../../assets/images/technologies/objectiveC.png'
import photoshopImage from '../../assets/images/technologies/photoshop.jpg'
import reactImage from '../../assets/images/technologies/react.png'
import reactNativeImage from '../../assets/images/technologies/reactNative.png'
import swiftImage from '../../assets/images/technologies/swift.png'
import webStormImage from '../../assets/images/technologies/webstorm.png'
import { TECHNOLOGIES } from '../../config/constants'

const Portfolio = ({ image, description, technologies }) => {
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
        <div>{description}</div>
        {technologies.map((technology) => {
          switch (technology) {
            case TECHNOLOGIES.JAVASCRIPT:
              return (
                <img src={javscriptImage} style={{ width: 300, height: 100 }} />
              )
            case TECHNOLOGIES.NPM:
              return <img src={npmImage} style={{ width: 300, height: 100 }} />
            case TECHNOLOGIES.JAVA:
              return <img src={javaImage} style={{ width: 300, height: 100 }} />
            case TECHNOLOGIES.COCOAPODS:
              return (
                <img src={cocoaPodsImage} style={{ width: 300, height: 100 }} />
              )
            case TECHNOLOGIES.PHOTOSHOP:
              return (
                <img src={photoshopImage} style={{ width: 300, height: 100 }} />
              )
            case TECHNOLOGIES.NODE:
              return <img src={nodeImage} style={{ width: 300, height: 100 }} />
            case TECHNOLOGIES.WEBSTORM:
              return (
                <img src={webStormImage} style={{ width: 300, height: 100 }} />
              )
            case TECHNOLOGIES.OBJECTIVE_C:
              return (
                <img
                  src={objectiveCImage}
                  style={{ width: 300, height: 100 }}
                />
              )
            case TECHNOLOGIES.SWIFT:
              return (
                <img src={swiftImage} style={{ width: 300, height: 100 }} />
              )
            case TECHNOLOGIES.REACT_NATIVE:
              return (
                <img
                  src={reactNativeImage}
                  style={{ width: 300, height: 100 }}
                />
              )
            case TECHNOLOGIES.REACT:
              return (
                <img src={reactImage} style={{ width: 300, height: 100 }} />
              )
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
