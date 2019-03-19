import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from './TextInput';
import UmbrellaIcon from '../UmbrellaIcon';

storiesOf('TextInput', module).add('basic TextInput', () => (
  <TextInput
    onChange={action('onChange')}
    name="name"
    label="Name"
    placeholder="enter your name"
    htmlId="myname"
    type="text"
    iconSuffix={<UmbrellaIcon />}
  />
));
