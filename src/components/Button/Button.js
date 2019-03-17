import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken, parseToRgb, parseToHsl } from "polished";

/*--primary-color : ${props => props.theme.color || 'tomato'};*/
/* color: var(--primary-color, ${props => props.theme.color}, 'tomato'); */


const StyledButton = styled.button`
  color : ${props=> props.color};
  background-color: ${props =>  props.bgColor};
  border: 2px solid ${props=> props.color};
  font-size: ${props=> props.theme.fontSize};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  outline: none;

  letter-spacing: 1px;
  font-weight: 700;
  padding: 0.3em 0.5em;
  border-radius: ${props => props.round ? '50%' : '3px'};
  box-shadow : 0 2px ${props=> lighten(0.1, props.color)};
  &[disabled]{
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${props=> darken(0.1, props.bgColor)};
  }
  &:active {
    background-color: ${props=> darken(0.1, props.bgColor)};
    transform: translateY(1px);
    box-shadow: 0 1px ${props=> lighten(0.1, props.color)};
  }
`;

const Button = (props) => {
  const theme = Object.assign({}, Button.defaultProps.theme, props.theme || {});
  const componentProps = {...props, theme};
  theme.colorParsed = parseToHsl(theme.color);
  theme.bgColorParsed = parseToHsl(theme.bgColor);
  componentProps.color = props.primary ? theme.bgColor: theme.color;
  componentProps.bgColor = props.primary? theme.color : theme.bgColor;
  return <StyledButton {...componentProps} />
};

Button.propTypes = {
  /** theme */
  theme: PropTypes.object,

  round: PropTypes.bool,
  /* is primary */

  primary: PropTypes.bool,
  disabled: PropTypes.bool
};


Button.defaultProps = {
  round: false,
  primary: false,
  disabled: false,
  theme: {
    color: 'tomato',
    bgColor: 'white',
    fontSize: '1rem',
  }
};

export default Button;
