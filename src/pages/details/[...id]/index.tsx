import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, useState } from 'react';

import { BINGG_DETAIL_API, getBoard } from '@services/getBoard';
import { patchBoardStart } from '@services/patchBoardStart';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import BingoBoard from '@components/Bingo/BingoBoard';
import DialogTriggerButton from '@components/Button/DialogTriggerButton';
import Layout from '@components/Layout/Layout';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
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

import EditBingoBoardDialog from '@features/Dialog/EditBingoBoardDialog';

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

  const [open, setOpen] = useState(false);
  const { data, status } = useQuery({
    queryKey: [BINGG_DETAIL_API, String(router?.query?.id)],
    queryFn: () => getBoard(String(router?.query?.id)),
  });
  const { mutateAsync } = useMutation({
    mutationFn: () => patchBoardStart(router?.query?.id as string),
  });
  const handleClcikBingoStart = () => {
    mutateAsync().then((res) => {
      console.log(res.response);
    });
  };

  const objective = data?.squares?.map((item) => item.objective);
  console.log(data, objective);

  return (
    <Box py={2} height={'100dvh'} overflow={`overlay`}>
      <Container
        maxWidth={'xl'}
        sx={{ mt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}
      >
        {status === `pending` && <div>loading</div>}
        {status === `error` && <div>error</div>}
        {status === `success` && (
          <Box
            border={`1px solid`}
            borderColor={`divider`}
            borderRadius={2}
            bgcolor={`common.white`}
            p={3}
          >
            <Grid container spacing={3}>
              <Grid item xs={8} sm={5} md={3}>
                <Box width={`100%`}>
                  <Typography variant={`h5`}>
                    🔥 {data?.name}(
                    {data?.status === `DRAFT` ? (
                      <>대기중</>
                    ) : data?.status === `ACTIVE` ? (
                      <>시작</>
                    ) : (
                      <>만료</>
                    )}
                    )
                  </Typography>
                  <Box my={2}>
                    <BingoBoard data={data} />
                  </Box>
                  {data?.status === `DRAFT` && (
                    <Button
                      fullWidth
                      variant={`contained`}
                      onClick={handleClcikBingoStart}
                    >
                      Start
                    </Button>
                  )}
                  <Typography mt={2}>{data?.description}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7} md={9}>
                <Box overflow={`overlay`} height={`100%`}>
                  <List
                    sx={{
                      width: '100%',
                      bgcolor: 'common.white',
                      overflow: `overlay`,
                      pt: 6,
                    }}
                  >
                    {objective?.map((item, index) => (
                      <Fragment key={item?.content || '' + index}>
                        <ListItem
                          disablePadding
                          secondaryAction={
                            <IconButton onClick={() => setOpen(true)}>
                              <ModeEditOutlineSharpIcon />
                            </IconButton>
                          }
                          sx={{ borderBottom: `1px solid red` }}
                        >
                          {item === null ? (
                            <>
                              <ListItemAvatar>{index + 1}</ListItemAvatar>
                              <ListItemText
                                primary={`목표를`}
                                secondary={`목표를 작성해주세요`}
                              />
                            </>
                          ) : (
                            <>
                              <ListItemAvatar>{index + 1}</ListItemAvatar>
                              <ListItemText
                                primary={`목표`}
                                secondary={item?.content}
                              />
                            </>
                          )}
                        </ListItem>
                      </Fragment>
                    ))}
                  </List>
                  {/* <List sx={{ width: '100%', bgcolor: 'common.white' }}>
                    {objective?.map((item, index) => (
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
                  </List> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        <EditBingoBoardDialog open={open} onClose={() => setOpen(false)} />
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
