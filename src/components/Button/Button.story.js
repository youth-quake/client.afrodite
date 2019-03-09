import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from './Button'

export const ButtonStories = storiesOf('Button', module)
  .add('enabled button', () => <Button onClick={action('clicked')}>Enabled</Button>)
  .add('disabled button', () => (<Button disabled>Disabled</Button>))
