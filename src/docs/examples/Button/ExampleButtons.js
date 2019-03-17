import React from 'react';
import styled from 'styled-components';
import Button from 'ps-react/Button';
import EyeIcon from 'ps-react/EyeIcon';
import PlusIcon from 'ps-react/PlusIcon';

import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import { darken } from 'polished';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const MButton =  withStyles(styles)(MuiButton);

const DecoratedButton = styled(Button)`
    margin-left 0.5em;
`;


/** Optional Button */
export default function ExampleButtons() {
  return (<>
    <DecoratedButton >regular</DecoratedButton>
    <DecoratedButton primary >primary</DecoratedButton>
    <DecoratedButton ><EyeIcon/></DecoratedButton>
    <DecoratedButton primary disabled >primary</DecoratedButton>
    <DecoratedButton primary theme={{color:'papayawhip', bgColor: 'purple'}} >
      <PlusIcon/>
    different</DecoratedButton>
    <DecoratedButton xSmall theme={{bgColor: '#ccc', color: darken(0.4, '#ccc')}} >small</DecoratedButton>

    <div>
      <MButton variant="contained" >
        Default
      </MButton>
      <MButton variant="contained" color="primary" >
      <EyeIcon/>
      </MButton>
      <MButton variant="contained" color="secondary" >
        Secondary
      </MButton>
      <MButton variant="contained" color="secondary" >
        Disabled
      </MButton>
      </div>
  </>)
}
