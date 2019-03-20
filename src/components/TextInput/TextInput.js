import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../Label';

const StyledInput = styled.input`
  border: 2px solid #b4b4b4;
  padding: 0.75em 1.5em 0.75em 0.5em;
  border-radius: 0.25em;
  width: 100%;
  box-sizing: border-box;
  max-width: 25em;
  &:focus {
    outline: 0;
    border-color: #5066c2;
    box-shadow: 0 0 0.3125em 0.125em rgba(80, 102, 194, 0.5);
  }
`;

const StyledFormItem = styled.div`
  margin-bottom: 0.5em;
`;

/** Text input with integrated label to enforce consistency in layout,
 * error display, label placement, and required field marker. */
function TextInput({
  htmlId,
  name,
  label,
  type = 'text',
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  iconSuffix,
  ...props
}) {
  const StyledIcon = styled.span`
    width: 1em;
    height: 1em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.45em;
  `;

  return (
    <StyledFormItem>
      <Label htmlFor={htmlId} label={label} required={required} />
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <StyledInput
          id={htmlId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={error && { border: 'solid 1px red' }}
          {...props}
        />
        {iconSuffix && <StyledIcon>{iconSuffix}</StyledIcon>}
      </span>
      {children}
      {error && (
        <div className="error" style={{ color: 'red' }}>
          {error}
        </div>
      )}
    </StyledFormItem>
  );
}

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input.
   * Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to
   * match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

export default TextInput;
