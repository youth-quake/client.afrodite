import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Input from './Input'

export const InputStories = storiesOf('Input', module)
  .add('enabled input', () => <Input />)
  .add('disabled input', () => (<Input disabled />))
