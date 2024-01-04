import { ReactElement } from 'react';

import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { QueryClient } from '@tanstack/react-query';

//
import Layout from '@components/Layout/Layout';

import BingoBoardList from '@features/BingoBoardList';
import MainIntro from '@features/MainIntro';

const Home = () => {
  return (
    <>
      <MainIntro />
      <BingoBoardList />
    </>
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
