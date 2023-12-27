import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: `grey.800`, color: `common.white`, py: 2 }}
  >
    <Container sx={{ textAlign: `right` }}>
      <Typography fontWeight={200} fontSize={11}>
        Copyright {new Date().getFullYear()}. Team INEG. ALL RIGHTS RESERVED.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
