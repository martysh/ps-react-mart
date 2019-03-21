import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Button from '../Button';
import PasswordInput from '../PasswordInput';

const FormDiv = styled.div`
  display: grid;
  justify-content: start;
  justify-items: start;
`;

/** Registration form with built-in validation. */
function RegistrationForm({
  onSubmit,
  minPasswordLength,
  confirmationMessage,
  submitted,
}) {
  const initUser = { email: '', password: '' };
  const [user, setUser] = useState(initUser);
  const [errors, setErrors] = useState({});

  const onChange = event => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };
  const validate = ({ email, password }) => {
    const errorsUpdate = {};

    if (!email) errorsUpdate.email = 'Email required.';
    if (password.length < minPasswordLength)
      errorsUpdate.password = `Password must be at least ${minPasswordLength} characters.`;

    setErrors(errorsUpdate);
    const formIsValid = Object.keys(errorsUpdate).length === 0;
    return formIsValid;
  };

  const onSubmitForm = () => {
    const formIsValid = validate(user);
    if (formIsValid) {
      onSubmit(user);
      setUser(initUser);
    }
  };

  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  function passwordQuality(password) {
    if (!password) return null;
    if (password.length >= minPasswordLength) return 100;
    const percentOfMinLength = parseInt(
      (password.length / minPasswordLength) * 100,
      10
    );
    return percentOfMinLength;
  }

  const { email, password } = user;

  return submitted ? (
    <h2>{confirmationMessage}</h2>
  ) : (
    <FormDiv>
      <TextInput
        htmlId="registration-form-email"
        name="email"
        onChange={onChange}
        label="Email"
        value={email}
        error={errors.email}
        required
      />

      <PasswordInput
        htmlId="registration-form-password"
        name="password"
        value={password}
        onChange={onChange}
        quality={passwordQuality(password)}
        showVisibilityToggle
        maxLength={50}
        error={errors.password}
      />

      <Button type="submit" primary onClick={onSubmitForm}>
        Register
      </Button>
    </FormDiv>
  );
}

RegistrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number,
};

RegistrationForm.defaultProps = {
  confirmationMessage: 'Thanks for registering!',
  minPasswordLength: 8,
  resetForm: true,
};

export default RegistrationForm;
