import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RegistrationForm from './RegistrationForm';

import Button from '../Button';

storiesOf('RegistrationForm', module).add('basic formReg', () => {
  function RegistrationFormExample() {
    const [submitted, toggleSubmitted] = useState(false);
    const onToggleSubmitted = () => {
      toggleSubmitted(subm => !subm);
    };
    return (
      <>
        <Button onClick={onToggleSubmitted}>Reset Form Status</Button>
        <RegistrationForm
          submitted={submitted}
          onSubmit={() => {
            action('submit');
            onToggleSubmitted();
          }}
        />
      </>
    );
  }
  return <RegistrationFormExample />;
});
