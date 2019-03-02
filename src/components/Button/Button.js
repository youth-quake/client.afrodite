import styled, { css, keyframes } from 'styled-components'
import { string, func, bool } from 'prop-types'
import { compose, withProps, setDisplayName } from 'recompose'

const WrappedButton = styled.button``

export const enhancedButton = compose(
  setDisplayName('Button'),
  withProps(({ onClick, loading, disabled }) => ({
    onClick: e => {
      if (loading || disabled) return
      if (typeof onClick === 'function') {
        onClick(e)
      }
    }
  }))
)(WrappedButton)

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Button = styled(enhancedButton).attrs({
  disabledprimary: props => props.disabled && props.primary,
  disabledsecondary: props => props.disabled && props.secondary,
  disabled: props => props.disabled && !props.primary && !props.secondary,
  primary: props => props.primary && !props.disabled,
  secondary: props => props.secondary && !props.disabled,
  fontSize: props => props.fontSize || props.theme.button.font_size,
  fontFamily: props => props.fontFamily || props.theme.button.font_family,
  borderradius: props => props.borderRadius || props.theme.button.border_radius,
  width: props => props.width,
  height: props => props.height,
  border: props => props.border,
  type: props => props.type
})`
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  border-radius: ${props => props.borderradius};
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  type: ${props => props.type};
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.button.primary_background};
      color: ${props.theme.button.primary_color};
      &:hover {
        background: ${props.theme.button.primary_hover_background};
      }
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.button.secondary_background};
      border: 1px solid ${props.theme.button.secondary_borderColor};
      color: ${props.theme.button.secondary_color};
      &:hover {
        border-color: ${props.theme.button.secondary_hover_borderColor};
        color: ${props.theme.button.secondary_hover_color};
      }
    `}

  ${props =>
    props.tertiary &&
    css`
      background-color: ${props.theme.button.tertiary_background};
      color: ${props.theme.button.tertiary_color};
      &:hover {
        opacity: 0.8;
      }
    `}

  ${props =>
    props.disabled &&
    `
      background-color: ${props.theme.button.tertiary_disabled_background};
      color: ${props.theme.button.tertiary_disabled_color};
      cursor: not-allowed;
    `}

  ${props =>
    props.disabledprimary &&
    `
      background-color: ${props.theme.button.primary_disabled_background};
      color: ${props.theme.button.primary_disabled_color};
      cursor: not-allowed;
    `}

  ${props =>
    props.disabledsecondary &&
    `
      background-color: ${props.theme.button.secondary_disabled_background};
      color: ${props.theme.button.secondary_disabled_color};
      border: 1px solid ${props.theme.button.secondary_disabled_color};
      cursor: not-allowed;
    `}

  ${props =>
    props.loading &&
    css`
      font-size: 0;
      cursor: not-allowed;
      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 18px;
        height: 18px;
        border: 2px solid ${props.primary ? props.theme.button.primary_borderLoadingColor : props.theme.button.secondary_borderLoadingColor};
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
      }
    `};
`

Button.displayName = 'Button'

Button.propTypes = {
  onClick: func,
  fontSize: string,
  borderRadius: string,
  width: string,
  height: string,
  border: string,
  type: string,
  primary: bool,
  secondary: bool,
  disabled: bool,
  disabledprimary: bool,
  disabledsecondary: bool
}

Button.defaultProps = {
  width: '100%',
  height: '50px',
  border: '0',
  disabled: false
}
