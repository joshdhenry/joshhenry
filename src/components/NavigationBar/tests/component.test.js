import { render, screen } from '@testing-library/react'

import NavigationBarComponent from '../component'

describe('NavigationBar component', () => {
  it('renders navigation bar items', () => {
    render(<NavigationBarComponent />)
    const homeElement = screen.getByText('Josh Henry')
    const aboutElement = screen.getByText('About')
    const portfolioElement = screen.getByText('Portfolio')
    const contactElement = screen.getByText('Contact')

    expect(homeElement).toBeInTheDocument()
    expect(aboutElement).toBeInTheDocument()
    expect(portfolioElement).toBeInTheDocument()
    expect(contactElement).toBeInTheDocument()
  })
})
