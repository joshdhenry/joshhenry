import { render, screen } from '@testing-library/react'

import HeaderComponent from '../component'

describe('Header component', () => {
  it('renders a header', () => {
    const headerText = 'header'

    render(<HeaderComponent>{headerText}</HeaderComponent>)

    const headerElement = screen.getByText(headerText)

    expect(headerElement).toBeInTheDocument()
  })
})
