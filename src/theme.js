/*
Dimitar Nizamov

This is the theme file that contains the theme for the app
It uses the Material UI createTheme function to create the theme
We have defined the global styles for our app here
*/
import { createTheme, experimental_extendTheme } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";

const bookstoreMain = {
  //generate from 100 to 500 shades of #c59444
  100: "#f9e8d9",
  200: "#f3d1b3",
  300: "#edba8d",
  400: "#e7a367",
  500: '#C59444',
  600: "#b28a3f",
}
// theme.js allows us to change the colors/font/sizes of various components in one go
const theme = createTheme({
  palette: {
    background: {
      default: "#F7F6F5",
      paper: "#F7F6F5",
      landing: '#C59444',
      icon: "rgba(0, 0, 0, 0.8)",
    },
    primary: {
      ...bookstoreMain,
      main: bookstoreMain[500],
    },
  },
  typography: {
    fontSize: 16,

    h1: {
      marginTop: "1.5rem",
      fontFamily: ["quiche-sans, serif"],
      fontSize: "2.1rem",
      fontWeight: 500,
    },

    h2: {
      fontFamily: ["quiche-sans, serif"],
      fontSize: "2rem",
      fontWeight: 500,
      color: '#C59444',
    },

    fontFamily: [
      `-apple-system,
      work-sans,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      sans-serif`,
    ],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        `,
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1000,
          textTransform: "capitalize",
        },
        contained: {
          color: "#fff",
        },
      },
    },
  },
});

export const muiTheme = experimental_extendTheme(theme);

export const joyTheme = extendJoyTheme({
  // This is required to point to `var(--mui-*)` because we are using `CssVarsProvider` from Material UI.
  cssVarPrefix: "mui",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...amber,
          solidColor: "var(--mui-palette-primary-contrastText)",
          solidBg: "var(--mui-palette-primary-main)",
          solidHoverBg: "var(--mui-palette-primary-dark)",
          plainColor: "var(--mui-palette-primary-main)",
          plainHoverBg:
            "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          plainActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
          outlinedBorder: "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
          outlinedColor: "var(--mui-palette-primary-main)",
          outlinedHoverBg:
            "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
          outlinedHoverBorder: "var(--mui-palette-primary-main)",
          outlinedActiveBg:
            "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
        },
        neutral: {
          ...grey,
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: "var(--mui-palette-divider)",
        text: {
          tertiary: "rgba(0 0 0 / 0.56)",
        },
      },
    },
    // Do the same for dark mode
    // dark: { ... }
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${theme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${theme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${theme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${theme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${theme.shadows[12]}`,
  },
});

export default theme;
