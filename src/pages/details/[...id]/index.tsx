import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { BINGG_DETAIL_API, getBoard } from '@services/getBoard';
import { QueryClient, useQuery } from '@tanstack/react-query';

import BingoBoard from '@components/Bingo/BingoBoard';
import Layout from '@components/Layout/Layout';
import { Box, Container, Typography } from '@mui/material';

const BingoDetailPage = () => {
  const router = useRouter();

  const { data, status } = useQuery({
    queryKey: [BINGG_DETAIL_API, Number(router?.query?.id)],
    queryFn: () => getBoard(Number(router?.query?.id)),
  });
  if (status === 'pending') return <div>loading</div>;
  if (status === 'error') return <div>error</div>;
  return (
    <Box py={2} height={'100dvh'}>
      <Container
        maxWidth={'xl'}
        sx={{
          mt: (theme) => `${theme.mixins.toolbar.minHeight}px`,
        }}
      >
        <Typography variant={'h2'}>Detail페이지입니다</Typography>
        <Box
          border={`1px solid`}
          borderColor={`divider`}
          borderRadius={2}
          bgcolor={`common.white`}
          p={3}
        >
          <Box width={200}>
            <BingoBoard data={data} />
          </Box>
          <Typography>빙고 이름 : {data?.name}</Typography>
          <Typography>빙고 설명 :{data?.description}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

BingoDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [BINGG_DETAIL_API, Number(id)],
    queryFn: () => getBoard(Number(id)),
  });
  return {
    props: {},
  };
};

export default BingoDetailPage;
