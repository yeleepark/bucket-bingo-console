import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment, ReactElement } from 'react';

import { BINGG_DETAIL_API, getBoard } from '@services/getBoard';
import { QueryClient, useQuery } from '@tanstack/react-query';

import BingoBoard from '@components/Bingo/BingoBoard';
import Layout from '@components/Layout/Layout';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const BingoDetailPage = () => {
  const router = useRouter();
  const { data, status } = useQuery({
    queryKey: [BINGG_DETAIL_API, String(router?.query?.id)],
    queryFn: () => getBoard(String(router?.query?.id)),
  });
  if (status === 'pending') return <div>loading</div>;
  if (status === 'error') return <div>error</div>;
  const objective = data?.squares?.map((item) => item.objective);
  return (
    <Box py={2} height={'100dvh'} overflow={`overlay`}>
      <Container
        maxWidth={'xl'}
        sx={{ mt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}
      >
        <Box
          border={`1px solid`}
          borderColor={`divider`}
          borderRadius={2}
          bgcolor={`common.white`}
          p={3}
        >
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box width={`100%`}>
                <Typography>빙고 이름 : {data?.name}</Typography>
                <BingoBoard data={data} />
                <Button variant={`contained`}>Start</Button>
                <Typography>빙고 설명 :{data?.description}</Typography>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box overflow={`overlay`} height={`100%`}>
                <List sx={{ width: '100%', bgcolor: 'common.white' }}>
                  {objective.map((item, index) => (
                    <Fragment key={index}>
                      <ListItem>
                        <ListItemAvatar>{index}</ListItemAvatar>
                        {!item?.content ? (
                          <>추가해주세용</>
                        ) : (
                          <ListItemText
                            primary={item?.content}
                            secondary={`${item?.currentCount}/${item?.totalCount}`}
                          />
                        )}
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Fragment>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
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
    queryKey: [BINGG_DETAIL_API, id],
    queryFn: () => getBoard(id as string),
  });
  return {
    props: {},
  };
};

export default BingoDetailPage;
