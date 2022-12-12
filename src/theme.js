/*This is the theme file that contains the theme for the app
It uses the Material UI createTheme function to create the theme
We have defined the global styles for our app here
*/
import { createTheme, experimental_extendTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";

const bookstoreMain = {
  //generate from 100 to 500 shades of #c59444
  100: "#f9e8d9",
  200: "#f3d1b3",
  300: "#edba8d",
  400: "#e7a367",
  500: "#C59444",
  600: "#b28a3f",
  700: "#8d6f35",
  800: "#69552b",
  900: "#453b21",
  A100: "#ffffff",
  A200: "#ffffff",
  A400: "#ffffff",
  A700: "#ffffff",
};
// theme.js allows us to change the colors/font/sizes of various components in one go
const theme = createTheme({
  palette: {
    background: {
      default: "#F7F6F5",
      landing: "#C59444",
      icon: "rgba(0, 0, 0, 0.8)",
    },
    primary: {
      ...bookstoreMain,
      main: bookstoreMain[500],
    },
    secondary: {
      main: "#2F2E41",
    },
  },
  typography: {
    fontSize: 16,

    h1: {
      marginTop: "1.5rem",
      fontFamily: ["scotch-display, serif"],
      fontSize: "2.1rem",
      fontWeight: 600,
    },

    h2: {
      fontFamily: ["scotch-display, serif"],
      fontSize: "2rem",
      fontWeight: 600,
      color: "#C59444",
    },

    h3: {
      fontFamily: ["scotch-display, serif"],
      fontSize: "1.7rem",
      fontWeight: 600,
      color: "#C59444",
    },
    fontFamily: [
      `-apple-system,
      halcom,
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
          ...bookstoreMain,
          ...bookstoreMain,
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
    display: '"halcom","Helvetica","Arial",sans-serif',
    body: '"halcom","Helvetica","Arial",sans-serif',
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
