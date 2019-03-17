import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import  Button  from './Button';
import EyeIcon from '../EyeIcon';
import PlusIcon from '../PlusIcon';


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <>
    <Button >regular</Button>
    <Button primary >primary</Button>
    <Button ><EyeIcon/></Button>
    <Button primary disabled >primary</Button>
    <Button primary theme={{color:'papayawhip', bgColor: 'purple'}} >
      <PlusIcon/>
    different</Button>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    </>
  ));
