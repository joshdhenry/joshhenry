import PropTypes from 'prop-types'
import Roll from 'react-reveal/Roll'

const PitchItem = ({ image, title, description }) => {
  return (
    <div className={'PitchItem'}>
      <Roll bottom>
        <img src={image} style={{ height: 512 }} />
      </Roll>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  )
}

PitchItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
}

export default PitchItem
