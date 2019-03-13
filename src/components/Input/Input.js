import styled from 'styled-components'

const Input = styled.input`
  position: relative;
  padding: 15px;
  width: 100%;
  background: ${props => props.theme.base_color};
  border: none;
  font-size: 14px;
  color: #080808;
  ${props => props.disabled && 'cursor: not-allowed;'}
`
export default Input