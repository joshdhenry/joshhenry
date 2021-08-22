import NavigationBarComponent from './component'
import { ABOUT, CONTACT, PITCH, PORTFOLIO } from './constants'

const NavigationBarContainer = () => {
  const navigate = (destinationClassName) => {
    const element = document.getElementsByClassName(destinationClassName)[0]
    const scrollOptions = {
      behavior: 'smooth',
    }

    element?.scrollIntoView(scrollOptions)
  }

  const navigateToAbout = () => navigate(ABOUT)
  const navigateToContact = () => navigate(CONTACT)
  const navigateToPitch = () => navigate(PITCH)
  const navigateToPortfolio = () => navigate(PORTFOLIO)

  return (
    <NavigationBarComponent
      navigateToAbout={navigateToAbout}
      navigateToContact={navigateToContact}
      navigateToPitch={navigateToPitch}
      navigateToPortfolio={navigateToPortfolio}
    />
  )
}

export default NavigationBarContainer
