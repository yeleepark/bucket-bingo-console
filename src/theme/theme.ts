import { Noto_Sans_KR } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const noto_sans = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'fallback',
  fallback: ['system-ui'],
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: noto_sans.style.fontFamily,
  },
});

export default theme;
