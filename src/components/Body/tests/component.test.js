import { render, screen } from '@testing-library/react'

import BodyComponent from '../component'

describe('Body component', () => {
  it('renders a body', () => {
    const bodyText = 'header'

    render(<BodyComponent>{bodyText}</BodyComponent>)

    const bodyElement = screen.getByText(bodyText)

    expect(bodyElement).toBeInTheDocument()
  })
})
