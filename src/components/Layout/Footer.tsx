import { Box, Container } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: `grey.800`, color: `common.white`, py: 10 }}
  >
    <Container maxWidth="xl">footer</Container>
  </Box>
);

export default Footer;
