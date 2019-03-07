import styled from 'styled-components'
import { string, func, bool } from 'prop-types'
import { compose, withProps, setDisplayName } from 'recompose'

const WrappedButton = styled.button`
  background: red;
  padding: 10px;
`

export const enhancedButton = compose(
  setDisplayName('Button'),
  withProps(({ onClick, disabled }) => ({
    onClick: e => {
      if (disabled) return
      if (typeof onClick === 'function') {
        onClick(e)
      }
    }
  }))
)(WrappedButton)

export const Button = styled(enhancedButton)`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  border-radius: ${props => props.borderradius};
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  type: ${props => props.type};

  ${props =>
    props.disabled &&
    `
      color: ${props.theme.button.disabled};
      cursor: not-allowed;
    `}
`

Button.displayName = 'Button'

Button.propTypes = {
  onClick: func,
  borderRadius: string,
  width: string,
  height: string,
  border: string,
  type: string,
  disabled: bool,
  fontSize: string
}

Button.defaultProps = {
  width: '100%',
  height: '50px',
  border: '0',
  disabled: false,
  fontSize: '300px'
}
