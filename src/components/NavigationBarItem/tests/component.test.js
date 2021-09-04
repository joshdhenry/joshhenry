import { render, screen } from '@testing-library/react'

import NavigationBarItemComponent from '../component'

describe('NavigationBarItem component', () => {
  const text = 'someText'

  it('renders text', () => {
    render(<NavigationBarItemComponent text={text} />)
    const textElement = screen.getByText(text)

    expect(textElement).toBeInTheDocument()
  })

  it('calls navigate when clicked', () => {
    const navigate = jest.fn()
    render(<NavigationBarItemComponent navigate={navigate} text={text} />)
    const textElement = screen.getByText(text)
    textElement.click()

    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
