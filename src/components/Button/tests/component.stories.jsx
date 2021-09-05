import React from 'react'

import Button from '../component'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: 'Button text',
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button text',
}

export const Secondary = Template.bind({})
Secondary.args = {}
