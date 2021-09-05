import PropTypes from 'prop-types'

import NavigationBarItemComponent from './component'
import { SCROLL_OPTIONS } from './constants'

const NavigationBarItemContainer = ({ navigateTo, text }) => {
  const navigate = () => {
    const element = document.getElementsByClassName(navigateTo)[0]

    element?.scrollIntoView(SCROLL_OPTIONS)
  }

  return <NavigationBarItemComponent navigate={navigate} text={text} />
}

NavigationBarItemContainer.propTypes = {
  navigateTo: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationBarItemContainer
