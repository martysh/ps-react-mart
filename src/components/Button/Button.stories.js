import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './Button';
import EyeIcon from '../EyeIcon';
import PlusIcon from '../PlusIcon';

storiesOf('Button', module)
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
