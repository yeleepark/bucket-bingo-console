import { blueGrey } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blueGrey: Palette['primary'];
  }

  interface PaletteOptions {
    blueGrey?: PaletteOptions['primary'];
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: { blueGrey: { ...blueGrey } },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        a: {
          textDecoration: `none`,
          color: `inherit`,
        },
      }),
    },
  },
});

export default responsiveFontSizes(theme);
