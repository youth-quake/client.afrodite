import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'
import styled from 'styled-components'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`

export const InputStories = storiesOf('Input', module)
  .add('enabled input', () =>
    (
      <Wrapper>
        <Input
          theme={Theme}
          color={Theme.base_color}
          type='text'
          placeholder='Digite seu nome' />
      </Wrapper>
    )
  )
  .add('disabled input', () => (
    <Wrapper>
      <Input
        theme={Theme}
        color={Theme.base_color}
        type='text'
        placeholder='Digite seu nome'
        disabled />
    </Wrapper>
  ))
