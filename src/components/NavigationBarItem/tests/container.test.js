import { render, screen } from '@testing-library/react'

import NavigationBarItemContainer from '../container'

describe('NavigationBarItem container', () => {
  const text = 'someText'

  it('renders text', () => {
    render(<NavigationBarItemContainer text={text} />)
    const textElement = screen.getByText(text)

    expect(textElement).toBeInTheDocument()
  })

  // it('calls navigate when clicked', () => {
  //   const navigateTo = 'About'
  //   render(<NavigationBarItemComponent navigateTo={navigateTo} text={text} />)
  //   const textElement = screen.getByText(text)
  //   textElement.click()
  //
  //   expect(navigate).toHaveBeenCalledTimes(1)
  // })
})
