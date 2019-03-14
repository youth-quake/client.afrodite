import styled from 'styled-components'

const Password = styled.input`
  position: relative;
  padding: 15px;
  width: 100%;
  background: ${props => props.color};
  border: none;
  font-size: 14px;
  color: #080808;
  ${props => props.disabled && 'cursor: not-allowed;'}
`
export default Password