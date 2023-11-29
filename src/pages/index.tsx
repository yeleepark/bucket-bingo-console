import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { QueryClient, useQuery } from '@tanstack/react-query';
import {
  BINGO_BOARDS_QUERY_KEY,
  getBingoBoardList,
} from '@services/getBingoBoards';
import Layout from '@components/Layout/Layout';
import Intro from '@features/Intro';

const Home = () => {
  const { data } = useQuery({
    queryKey: [BINGO_BOARDS_QUERY_KEY],
    queryFn: () => getBingoBoardList(),
  });
  const { items } = data || {};
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Intro />
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <Box my={4}>
            <Typography variant="h3">Bucket Bingo</Typography>
          </Box>
          <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {items?.map((item) => (
              <Grid key={item.id} item xs={1}>
                <Card>
                  <CardHeader
                    title={item.name}
                    subheader={item?.created?.at.toString() || `-`}
                  />
                  <CardMedia>
                    <CardContent>
                      <Grid container columns={item.size}>
                        {item?.squares?.map((i) => (
                          <Grid key={i.order} item xs={1}>
                            <Box
                              sx={{
                                outline: `1px dotted black`,
                                bgcolor:
                                  i.status === `DONE`
                                    ? `common.black`
                                    : `common.white`,
                                color:
                                  i.status === `DONE`
                                    ? `common.white`
                                    : `common.black`,
                              }}
                            >
                              {i.order}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </CardMedia>
                  <CardActions disableSpacing>카드액션</CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: [BINGO_BOARDS_QUERY_KEY],
    queryFn: () => getBingoBoardList(),
  });
  return {
    props: {},
  };
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
