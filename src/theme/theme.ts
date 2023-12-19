import { Noto_Sans_KR } from 'next/font/google';

import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const noto_sans = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'fallback',
  fallback: ['system-ui'],
});

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
  typography: {
    fontFamily: [noto_sans.style.fontFamily].join(''),
  },
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
export default theme;
