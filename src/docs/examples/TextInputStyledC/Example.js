/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TextInputStyledC from 'ps-react/TextInputStyledC';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledC
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
