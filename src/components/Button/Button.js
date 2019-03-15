import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*--primary-color : ${props => props.theme.color || 'tomato'};*/
/* color: var(--primary-color, ${props => props.theme.color}, 'tomato'); */


const StyledButton = styled.button`
  /*  invert if primary */
  --primary-color: ${props=> props.primary ? props.theme.bgColor: props.theme.color};
  --bg-color: ${props =>  props.primary? props.theme.color : props.theme.bgColor};
  --border-color: ${props=> props.theme.color};
  --btn-font-size: ${props=> props.theme.fontSize};

  color : var(--primary-color);
  background-color: var(--bg-color);
  border: 2px solid var( --border-color);
  font-size: var( --btn-font-size);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 1px;
  font-weight: 700;
  padding: 0.3em 0.5em;
  border-radius: ${props => props.round ? '50%' : '3px'}
  &[disabled]{
    opacity: 0.4;
  }
`;

const Button = (props) => {
  const mergedTheme = Object.assign({}, Button.defaultProps.theme, props.theme || {});
  const componentProps = {...props, theme: mergedTheme};
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
