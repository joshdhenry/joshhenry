import { render, screen } from '@testing-library/react'

import ButtonComponent from '../component'

describe('Button component', () => {
  it('renders a button', () => {
    const buttonText = 'button'

    render(<ButtonComponent>{buttonText}</ButtonComponent>)

    const buttonTextElement = screen.getByText(buttonText)

    expect(buttonTextElement).toBeInTheDocument()
  })
})
