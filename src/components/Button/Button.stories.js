import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
/* import { muiTheme } from 'storybook-addon-material-ui'; */
import { storiesOf } from '@storybook/react';
import Button from './Button';
import EyeIcon from '../EyeIcon';
import PlusIcon from '../PlusIcon';
import myTheme from '../../theme/my-theme';
import CustomButton from './CustomButton';

storiesOf('Button', module)
  /* .addDecorator(muiTheme([myTheme])) */
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
      <MuiThemeProvider theme={myTheme}>
        <CustomButton>my custom button</CustomButton>
        <div>
          <MuiButton variant="contained">Default</MuiButton>
          <MuiButton variant="outlined" color="primary">
            <EyeIcon />
          </MuiButton>
          <MuiButton variant="text" color="secondary">
            Secondary
          </MuiButton>
          <MuiButton variant="outlined" color="primary">
            Outlined seconday
          </MuiButton>
        </div>
      </MuiThemeProvider>
    </>
  ));
