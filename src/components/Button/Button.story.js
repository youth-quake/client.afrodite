import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Button } from './Button'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`
export const ButtonStories = storiesOf('Button', module)
  .add('primary color', () => (
    <Wrapper>
      <Button theme={Theme} color={Theme.primary_color} onClick={action('clicked')}>
        Enabled
      </Button>
    </Wrapper>)
  )
  .add('secondary color', () => (
    <Wrapper>
      <Button theme={Theme} color={Theme.secondary_color} onClick={action('clicked')}>
        Enabled
      </Button>
    </Wrapper>)
  )
  .add('disabled', () => (
    <Wrapper>
      <Button theme={Theme} color={Theme.primary_color} disabled>
        Disabled
      </Button>
    </Wrapper>)
  )
