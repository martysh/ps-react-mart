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
        lineHeight: 1.4,
        backgroundImage:
          'linear-gradient(rgba(200, 50, 50, .25) 1px, transparent 1px)',
        backgroundSize: '1px 1.4rem',
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
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </SomeDiv>
      </MuiThemeProvider>
    );
  }
);
