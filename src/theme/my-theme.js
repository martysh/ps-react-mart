import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, yellow, red } from '@material-ui/core/colors';
import 'typeface-inconsolata';

const defaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      lg: 80, // 1280
      md: 60, // 960
      sm: 37.5, // 600
      xl: 120, // 1920
    },
    unit: 'em',
  },
  useNextVariants: true,
});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const fontScale = {
  text_base_size: 1,
  text_scale_ratio: {
    default: 1.2,
    [breakpoints.up('md')]: 1.25,
  },
};

const getFontSize = (scale, rank) => `${scale ** rank}em`;

const fontScales = (scale = fontScale.text_scale_ratio.default) => ({
  xs: getFontSize(scale, -2),
  sm: getFontSize(scale, -1),
  md: getFontSize(scale, 1),
  lg: getFontSize(scale, 2),
  xl: getFontSize(scale, 3),
  xxl: getFontSize(scale, 4),
  xxxl: getFontSize(scale, 5),
});

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
    h2: {
      fontSize: fontScales().xl,
      [breakpoints.up('md')]: {
        fontSize: fontScales(fontScale.text_scale_ratio[breakpoints.up('md')])
          .xl,
      },
    },
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
