import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import Anchor from './Anchor'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`
export const AnchorStories = storiesOf('Anchor', module)
  .add('primary color', () => (
    <Wrapper>
      <Anchor theme={Theme} color={Theme.primary_color} onClick={action('clicked')}>
        Enabled
      </Anchor>
    </Wrapper>)
  )
  .add('secondary color', () => (
    <Wrapper>
      <Anchor theme={Theme} color={Theme.secondary_color} onClick={action('clicked')}>
        Enabled
      </Anchor>
    </Wrapper>)
  )
  .add('disabled', () => (
    <Wrapper>
      <Anchor theme={Theme} color={Theme.primary_color} disabled>
        Disabled
      </Anchor>
    </Wrapper>)
  )
