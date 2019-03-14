import React from 'react'
import { storiesOf } from '@storybook/react'
import Password from './Password'
import styled from 'styled-components'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`

export const PasswordStories = storiesOf('Password', module)
  .add('enabled Password', () =>
    (
      <Wrapper>
        <Password
          theme={Theme}
          color={Theme.base_color}
          type='password'
          placeholder='Digite sua senha' />
      </Wrapper>
    )
  )
  .add('disabled Password', () => (
    <Wrapper>
      <Password
        theme={Theme}
        color={Theme.base_color}
        type='password'
        placeholder='Digite sua senha'
        disabled />
    </Wrapper>
  ))
