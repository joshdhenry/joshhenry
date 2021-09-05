import { render, screen } from '@testing-library/react'

import FooterComponent from '../component'

describe('Footer component', () => {
  it('renders attributions in the footer', () => {
    render(<FooterComponent />)

    const attributionElement = screen.getByText(
      'Design photo created by rawpixel.com - www.freepik.com',
    )

    expect(attributionElement).toBeInTheDocument()
  })
})
