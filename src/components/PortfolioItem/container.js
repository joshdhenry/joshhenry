import { PropTypes } from 'prop-types'

import awsImage from '../../assets/images/technologies/awsIcon.png'
import azureImage from '../../assets/images/technologies/azureIcon.png'
import cocoaPodsImage from '../../assets/images/technologies/cocoapodsIcon.png'
import goImage from '../../assets/images/technologies/goIcon.png'
import javaImage from '../../assets/images/technologies/javaicon.png'
import javscriptImage from '../../assets/images/technologies/javascriptIcon.png'
import nodeImage from '../../assets/images/technologies/nodeIcon.png'
import npmImage from '../../assets/images/technologies/npm.png'
import objectiveCImage from '../../assets/images/technologies/objectiveCIcon.png'
import photoshopImage from '../../assets/images/technologies/photoshopIcon.png'
import phpImage from '../../assets/images/technologies/phpIcon.png'
import reactImage from '../../assets/images/technologies/react.png'
import reactNativeImage from '../../assets/images/technologies/reactNative.png'
import swiftImage from '../../assets/images/technologies/swift.png'
import webStormImage from '../../assets/images/technologies/webstorm.png'
import xCodeImage from '../../assets/images/technologies/xCodeIcon.png'
import { TECHNOLOGIES } from '../../config/constants'

import PortfolioItemComponent from './component'

const PortfolioItemContainer = ({
  image,
  description,
  technologies,
  title,
}) => {
  const getImageForTechnology = (technology) => {
    let image

    switch (technology) {
      case TECHNOLOGIES.JAVASCRIPT:
        image = javscriptImage
        break
      case TECHNOLOGIES.NPM:
        image = npmImage
        break
      case TECHNOLOGIES.JAVA:
        image = javaImage
        break
      case TECHNOLOGIES.COCOAPODS:
        image = cocoaPodsImage
        break
      case TECHNOLOGIES.PHOTOSHOP:
        image = photoshopImage
        break
      case TECHNOLOGIES.NODE:
        image = nodeImage
        break
      case TECHNOLOGIES.WEBSTORM:
        image = webStormImage
        break
      case TECHNOLOGIES.OBJECTIVE_C:
        image = objectiveCImage
        break
      case TECHNOLOGIES.SWIFT:
        image = swiftImage
        break
      case TECHNOLOGIES.REACT_NATIVE:
        image = reactNativeImage
        break
      case TECHNOLOGIES.REACT:
        image = reactImage
        break
      case TECHNOLOGIES.AZURE:
        image = azureImage
        break
      case TECHNOLOGIES.GO:
        image = goImage
        break
      case TECHNOLOGIES.XCODE:
        image = xCodeImage
        break
      case TECHNOLOGIES.PHP:
        image = phpImage
        break
      case TECHNOLOGIES.AWS:
        image = awsImage
        break
      default:
        break
    }

    return image
  }

  const technologyImages = technologies?.map(getImageForTechnology)

  return (
    <PortfolioItemComponent
      description={description}
      image={image}
      technologyCaptions={technologies}
      technologyImages={technologyImages}
      title={title}
    />
  )
}

PortfolioItemContainer.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default PortfolioItemContainer
