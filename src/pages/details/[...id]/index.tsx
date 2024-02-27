import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, useState } from 'react';

import { BINGG_DETAIL_API, getBoard } from '@services/getBoard';
import { patchBoardStart } from '@services/patchBoardStart';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import BingoBoard from '@components/Bingo/BingoBoard';
import PopupTriggerButton from '@components/Button/PopupTriggerButton';
import Layout from '@components/Layout/Layout';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';

import EditBingoBoardDialog from '@features/EditBingoBoardDialog';

const EditListItem = () => {
  const [edit, setEdit] = useState(false);
  return (
    <Box>
      {edit ? (
        <Box>
          <TextField />
          <IconButton onClick={() => setEdit(false)}>
            <ClearIcon />
          </IconButton>
        </Box>
      ) : (
        <Box>
          추가해주세용
          <IconButton onClick={() => setEdit(true)}>
            <EditIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
const BingoDetailPage = () => {
  const router = useRouter();
  const { data, status } = useQuery({
    queryKey: [BINGG_DETAIL_API, String(router?.query?.id)],
    queryFn: () => getBoard(String(router?.query?.id)),
  });
  const { mutateAsync } = useMutation({
    mutationFn: () => patchBoardStart(router?.query?.id as string),
  });
  const handleClcikBingoStart = () => {
    mutateAsync().then((res) => {
      console.log(res);
    });
  };
  if (status === 'pending') return <div>loading</div>;
  if (status === 'error') return <div>error</div>;
  const objective = data?.squares?.map((item) => item.objective);
  console.log(data?.squares);
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
                <Button variant={`contained`} onClick={handleClcikBingoStart}>
                  Start
                </Button>
                <Typography>빙고 설명 :{data?.description}</Typography>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box overflow={`overlay`} height={`100%`}>
                <PopupTriggerButton popup={<EditBingoBoardDialog />}>
                  <AddIcon />
                </PopupTriggerButton>
                <List sx={{ width: '100%', bgcolor: 'common.white' }}>
                  {objective.map((item, index) => (
                    <Fragment key={index}>
                      <ListItem>
                        <ListItemAvatar>{index}</ListItemAvatar>
                        {!item?.content ? (
                          <EditListItem />
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
