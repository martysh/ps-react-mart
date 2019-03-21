import React from 'react';
import styled from 'styled-components';
import Button from 'ps-react/Button';
import EyeIcon from 'ps-react/EyeIcon';
import PlusIcon from 'ps-react/PlusIcon';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import { darken } from 'polished';

import CustomButton from '../../../components/Button/CustomButton';

import myTheme from '../../../theme/my-theme';


const DecoratedButton = styled(Button)`
  margin-left: 0.5em;
`;

/** Optional Button */
export default function ExampleButtons() {
  return (
    <>
      <DecoratedButton>regular</DecoratedButton>
      <DecoratedButton primary>primary</DecoratedButton>
      <DecoratedButton>
        <EyeIcon />
      </DecoratedButton>
      <DecoratedButton primary disabled>
        primary
      </DecoratedButton>
      <DecoratedButton
        primary
        theme={{ color: 'papayawhip', bgColor: 'purple' }}
      >
        <PlusIcon />
        different
      </DecoratedButton>
      <DecoratedButton
        xSmall
        theme={{ bgColor: '#ccc', color: darken(0.4, '#ccc') }}
      >
        small
      </DecoratedButton>

      <div>
      <MuiThemeProvider theme={myTheme}>
        <MuiButton variant="contained">Default</MuiButton>
        <MuiButton variant="contained" color="primary">
          <EyeIcon />
        </MuiButton>
        <MuiButton variant="contained" color="secondary">
          Secondary
        </MuiButton>
        <MuiButton variant="contained" color="secondary">
          Disabled
        </MuiButton>
        <CustomButton/>

    </MuiThemeProvider>
      </div>
    </>
  );
}
