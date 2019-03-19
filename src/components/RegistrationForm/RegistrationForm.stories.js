

import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


storiesOf('RegistrationForm', module)
.add('basic RegistrationForm', () => {
  return <RegistrationForm onSubmit={action('submit')} />;
});


