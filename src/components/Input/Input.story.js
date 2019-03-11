import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 300px;
`
export const InputStories = storiesOf('Input', module)
  .add('enabled input', () =>
    (
      <Wrapper>
        <Input type='text' placeholder='Digite seu nome' />
      </Wrapper>
    )
  )
  .add('disabled input', () => (
    <Wrapper>
      <Input type='text' placeholder='Digite seu nome' disabled />
    </Wrapper>
  ))
