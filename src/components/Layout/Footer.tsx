import { Box, Container, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component={'footer'}
    sx={{ bgcolor: `grey.800`, color: `common.white`, py: 2 }}
  >
    <Container sx={{ textAlign: `right` }}>
      <Typography fontWeight={200} fontSize={11}>
        © {new Date().getFullYear()}. INEG. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
