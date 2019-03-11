import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  position: relative;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  background: #FF8C00;
  color: white;
  font-weight: bold;
  font-size: 14px;
  ${props => props.disabled && 'cursor: not-allowed;'}
`

export default Button