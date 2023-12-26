import { ReactElement } from 'react';

import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { QueryClient } from '@tanstack/react-query';

import Layout from '@components/Layout/Layout';
import { Box } from '@mui/material';

import BingoBoardList from '@features/BingoBoardList';
import MainIntro from '@features/MainIntro';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <MainIntro />
      <BingoBoardList />
    </Box>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: [BINGO_BOARDS_API_URL],
    queryFn: () => getBoards(),
  });
  return {
    props: {},
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
