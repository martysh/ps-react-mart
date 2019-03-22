import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
/* import { muiTheme } from 'storybook-addon-material-ui'; */
import { storiesOf } from '@storybook/react';
import SelectBox from './SelectBox';

import myTheme from '../../theme/my-theme';

window.myTheme = myTheme;
console.log(myTheme);

storiesOf('SelectBox', module)
  /* .addDecorator(muiTheme([myTheme])) */
  .add('with text', () => (
    <SelectBox options={['Albania', 'France', 'Spain']} name="country_id" />
  ));
