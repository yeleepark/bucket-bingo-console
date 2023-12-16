import Layout from '../../../components/Layout/Layout';
import BingoBoard from '../../../components/Bingo-/BingoBoard';
import BingoSqure from '../../../components/Bingo-/BingoSqure';
import { Box, Container, Typography } from '@mui/material';
import { BINGG_DETAIL_API, getBoard } from '@services/getBoard';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const BingoDetailPage = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: [BINGG_DETAIL_API, Number(router?.query?.id)],
    queryFn: () => getBoard(Number(router?.query?.id)),
  });

  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Typography variant="h2">Detail페이지입니다</Typography>
        <Typography>빙고 이름 : {data?.name}</Typography>
        <Typography>빙고 설명 :{data?.description}</Typography>
        <Box width={`50%`}>
          <BingoBoard size={5}>
            {data?.squares?.map((i) => (
              <BingoSqure key={i.order} status={i.status} />
            ))}
          </BingoBoard>
        </Box>
      </Container>
    </Box>
  );
};

BingoDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BingoDetailPage;
