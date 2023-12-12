import { Box } from '@mui/material';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import Layout from '@components/Layout/Layout';
import MainIntro from '@features/MainIntro';
import BingoBoardList from '@features/BingoBoardList';

const Home = () => {
  const { data, status } = useQuery({
    queryKey: [BINGO_BOARDS_API_URL],
    queryFn: () => getBoards(),
  });

  if (status === `pending`) return <>로딩</>;
  if (status === `error`) return <>에러</>;

  const { items } = data;

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <MainIntro />
      <BingoBoardList data={items} />
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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
