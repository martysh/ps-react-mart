import React from 'react';
import {
  MuiThemeProvider,
  withStyles,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { storiesOf } from '@storybook/react';
import myTheme from '../../theme/my-theme';
// import SomeDiv from './MyComponent';

storiesOf('Typography', module).add(
  'looking at customizing typography here',
  () => {
    const styles = createStyles({
      root: {
        lineHeight: 1.5,
        backgroundImage:
          'linear-gradient(rgba(200, 50, 50, .25) 1px, transparent 1px)',
        backgroundSize: '1px 1.5rem',
        height: '100vh',
      },
    });

    const MyComponent = props => (
      <div className={props.classes.root}>{props.children}</div>
    );

    const SomeDiv = withStyles(styles)(MyComponent);

    console.log(myTheme);

    return (
      <MuiThemeProvider theme={myTheme}>
        <SomeDiv>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
        </SomeDiv>
      </MuiThemeProvider>
    );
  }
);
