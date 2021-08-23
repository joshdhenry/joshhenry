import { PropTypes } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import Fade from '../Fade'

import styles from './styles'

const PortfolioItem = ({ image, description, technologyImages, title }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.projectImage}>
        <Parallax
          className="custom-class"
          tagOuter="figure"
          x={['-1000px', '0px']}
        >
          <img src={image} />
        </Parallax>
      </div>

      <div style={styles.text}>
        <Fade cascade>
          <h1>{title}</h1>
          <div>{description}</div>
        </Fade>

        {technologyImages.map((technologyImage) => (
          <img src={technologyImage} style={styles.technology} />
        ))}
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  technologyImages: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string,
}

export default PortfolioItem
