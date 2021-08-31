import { PropTypes } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

import styles from './styles'

const PortfolioItem = ({ image, description, technologyImages, title }) => {
  return (
    <div key={title} style={styles.wrapper}>
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
          <Header>{title}</Header>
          <Body>{description}</Body>
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
