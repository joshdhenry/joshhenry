import { render, screen } from '@testing-library/react'

import AboutComponent from '../component'

describe('About component', () => {
  it('renders an about section', () => {
    render(<AboutComponent />)

    const aboutMeElement = screen.getByText('About Me')

    expect(aboutMeElement).toBeInTheDocument()
  })
})
