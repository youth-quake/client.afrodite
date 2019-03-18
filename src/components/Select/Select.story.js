import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Select, Option } from './Select'
import { Theme } from '../Theme'

const Wrapper = styled.div`
  width: 300px;
  margin: 20% auto;
`
export const SelectStories = storiesOf('Select', module)
  .add('primary color', () => (
    <Wrapper>
      <Select theme={Theme} color={Theme.primary_color} onClick={action('clicked')}>
        <Option color={Theme.base_color}>São Paulo</Option>
        <Option>Rio de Janeiro</Option>
      </Select>
    </Wrapper>)
  )
  .add('secondary color', () => (
    <Wrapper>
      <Select theme={Theme} color={Theme.secondary_color} onClick={action('clicked')}>
        <Option color={Theme.base_color}>São Paulo</Option>
        <Option>Rio de Janeiro</Option>
      </Select>
    </Wrapper>)
  )
  .add('disabled', () => (
    <Wrapper>
      <Select theme={Theme} color={Theme.primary_color} disabled />
    </Wrapper>)
  )
