import PropTypes from 'prop-types'

import NavigationBarItemComponent from './component'

const NavigationBarItemContainer = ({ navigateTo, text }) => {
  const navigate = () => {
    const element = document.getElementsByClassName(navigateTo)[0]
    const scrollOptions = {
      behavior: 'smooth',
    }

    element?.scrollIntoView(scrollOptions)
  }

  return <NavigationBarItemComponent navigate={navigate} text={text} />
}

NavigationBarItemContainer.propTypes = {
  navigateTo: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationBarItemContainer
