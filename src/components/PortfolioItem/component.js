import { PropTypes } from 'prop-types'
import { Parallax } from 'react-scroll-parallax'

import javscriptImage from '../../assets/javaScript.png'

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
          if (technology === 'javascript') {
            return (
              <img src={javscriptImage} style={{ width: 300, height: 100 }} />
            )
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
