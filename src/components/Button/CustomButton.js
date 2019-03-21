import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: '#5066C2',
    borderRadius: '0.25em',
    padding: '0.75em 1.25em',
    color: '#fff',
    border: 0,
    fontSize: '1em',
  },
  label: {
    textTransform: 'lowercase',
  },
})(Button);

export default function ClassesShorthand() {
  return <StyledButton>Classes Shorthand</StyledButton>;
}
