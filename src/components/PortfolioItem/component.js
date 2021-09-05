import { PropTypes } from 'prop-types'
import Bounce from 'react-reveal/Bounce'

import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

import styles from './styles'

const PortfolioItem = ({ image, description, technologyImages, title }) => {
  return (
    <div key={title} style={styles.wrapper}>
      <div style={styles.projectImage}>
        <Bounce left>
          <img src={image} style={{ height: '15rem' }} />
        </Bounce>
      </div>

      <div style={styles.text}>
        <Fade cascade>
          <Header>{title}</Header>
          <Body>{description}</Body>
        </Fade>

        {technologyImages.map((technologyImage) => (
          <img
            alt={'Some tech...'}
            src={technologyImage}
            style={styles.technology}
          />
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
