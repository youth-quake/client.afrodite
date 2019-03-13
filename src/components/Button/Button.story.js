import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Button } from './Button'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`
export const ButtonStories = storiesOf('Button', module)
  .add('enabled button', () => (
    <Wrapper>
      <Button primary_color onClick={action('clicked')}>
        Enabled
      </Button>
    </Wrapper>)
  )
  .add('disabled button', () => (
    <Wrapper>
      <Button disabled>
        Disabled
      </Button>
    </Wrapper>)
  )
