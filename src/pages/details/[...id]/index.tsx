import Layout from '@components/Layout/Layout';
import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';

const BingoDetailPage = () => (
  <Box>
    <Container maxWidth="xl" sx={{ py: 10 }}>
      Detail페이지입니다
    </Container>
  </Box>
);

BingoDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BingoDetailPage;
