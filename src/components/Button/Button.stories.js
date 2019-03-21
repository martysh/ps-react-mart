import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import EyeIcon from '../EyeIcon';
import PlusIcon from '../PlusIcon';
import myTheme from '../../theme/my-theme';

storiesOf('Button', module)
  .addDecorator(muiTheme([newTheme]))
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <>
      <Button>regular</Button>
      <Button primary>primary</Button>
      <Button>
        <EyeIcon />
      </Button>
      <Button primary disabled>
        primary
      </Button>
      <Button primary theme={{ color: 'papayawhip', bgColor: 'purple' }}>
        <PlusIcon />
        different
      </Button>
      <Button>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </>
  ));
