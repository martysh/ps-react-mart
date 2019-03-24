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

const getFontSize = (scale = fontScale.text_scale_ratio.default, rank) =>
  `${scale ** rank}em`;

const fontScales = {
  xs: scale => getFontSize(scale, -2),
  sm: scale => getFontSize(scale, -1),
  md: scale => getFontSize(scale, 1),
  lg: scale => getFontSize(scale, 2),
  xl: scale => getFontSize(scale, 3),
  xxl: scale => getFontSize(scale, 4),
  xxxl: scale => getFontSize(scale, 5),
};

fontScales.h1 = fontScales.xxxl;
fontScales.h2 = fontScales.xxl;
fontScales.h3 = fontScales.xl;
fontScales.h4 = fontScales.lg;
fontScales.h5 = fontScales.md;

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
    h1: {
      fontSize: fontScales.xxxl(),
      [breakpoints.up('md')]: {
        fontSize: fontScales.xxxl(
          fontScale.text_scale_ratio[breakpoints.up('md')]
        ),
      },
    },
    h2: {
      fontSize: fontScales.xxl(),
      [breakpoints.up('md')]: {
        fontSize: fontScales.xxl(
          fontScale.text_scale_ratio[breakpoints.up('md')]
        ),
      },
    },
    h3: {
      fontSize: fontScales.xl(),
      [breakpoints.up('md')]: {
        fontSize: fontScales.xl(
          fontScale.text_scale_ratio[breakpoints.up('md')]
        ),
      },
    },
    h4: {
      fontSize: fontScales.lg(),
      [breakpoints.up('md')]: {
        fontSize: fontScales.lg(
          fontScale.text_scale_ratio[breakpoints.up('md')]
        ),
      },
    },
    h5: {
      fontSize: fontScales.md(),
      [breakpoints.up('md')]: {
        fontSize: fontScales.md(
          fontScale.text_scale_ratio[breakpoints.up('md')]
        ),
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
