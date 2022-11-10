import { PropTypes } from 'prop-types'
import Bounce from 'react-reveal/Bounce'

import { default as viewportHooks } from '../../hooks/useViewport'
import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

import desktopStyles from './styles'
import mobileStyles from './styles.mobile.js'

const PortfolioItem = ({
  image,
  description,
  technologyCaptions,
  technologyImages,
  title,
}) => {
  const { isMobile } = viewportHooks.useViewport()
  const styles = isMobile ? mobileStyles : desktopStyles

  return (
    <div key={title} style={styles.wrapper}>
      <div style={styles.imageWrapper}>
        <Bounce left>
          <img src={image} style={styles.image} />
        </Bounce>
      </div>

      <div style={styles.text}>
        <Fade cascade>
          <Header>{title}</Header>
          <Body>{description}</Body>
        </Fade>

        {technologyImages.map((technologyImage, index) => (
          <img
            alt={technologyCaptions[index]}
            key={index}
            src={technologyImage}
            style={styles.technology}
            title={technologyCaptions[index]}
          />
        ))}
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  technologyCaptions: PropTypes.arrayOf(PropTypes.string),
  technologyImages: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string,
}

export default PortfolioItem
