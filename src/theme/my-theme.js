import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, yellow, red } from '@material-ui/core/colors';
import 'typeface-inconsolata';

const defaultTheme = createMuiTheme({
  my_font_vars: { text_base_size: 1, text_scale_ratio: 1.2 },
  breakpoints: {
    values: {
      lg: 80,
      md: 60,
      sm: 37.5,
      xl: 120,
    },
    unit: 'em',
  },
  useNextVariants: true,
});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;
const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      text: {
        // Name of the rule
        color: 'white', // Some CSS
      },
      outlinedPrimary: {
        padding: '0.5em 0.7em',
      },
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'typeface-inconsolata',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    /* h2: {
      fontSize: '3em',
      [breakpoints.up('md')]: {
        fontSize: '5em',
      },
    }, */
    useNextVariants: true,
  },
  palette: {
    primary: lightGreen,
    secondary: yellow,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;
