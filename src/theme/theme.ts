import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: `#FF5577` },
    secondary: { main: `#016a70` },
    success: { main: `#5475FF` },
    warning: { main: `#FFD354` },
    text: { primary: `#332226` },
    background: { default: `#FFFCFA`, paper: `#FFFDFA` },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        html: { minWidth: 360, minHeight: 500 },
        body: { overscrollBehavior: `none`, scrollBehavior: `smooth` },
        a: {
          textDecoration: `none`,
          color: `inherit`,
        },
      }),
    },
  },
});

export default responsiveFontSizes(theme);
