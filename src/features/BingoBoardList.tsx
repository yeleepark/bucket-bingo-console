import { useRouter } from 'next/router';

import useBingoBoardsQuery from '@hooks/queries/useBingoBoardsQuery';

import BingoBoard from '@components/Bingo/BingoBoard';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';

const BingoBoardList = () => {
  const router = useRouter();
  const { data } = useBingoBoardsQuery();
  const handleClickPagnation = (page: number) => {
    const url = `${router.pathname}?pageOffset=${page - 1}`;
    router.push(url, `/`, { shallow: true });
  };
  return (
    <Box sx={{ py: 2, bgcolor: `blueGrey.100` }}>
      <Container>
        <Box my={4}>
          <Typography variant="h6" fontWeight={`bold`}>
            🔥 대결중인 빙고 🔥
          </Typography>
        </Box>
        <Grid
          container
          columns={{ xs: 2, sm: 3, lg: 4 }}
          spacing={4}
          alignItems={`stretch`}
        >
          {data?.items.map((item) => (
            <Grid key={item.id} item xs={1}>
              <Card
                onClick={() => router.push(`details/${item.id}`)}
                sx={{ height: `100%`, cursor: `pointer` }}
              >
                <CardHeader
                  title={item.name}
                  subheader={item?.created?.at.toString() || `-`}
                />
                <CardMedia>
                  <CardContent>
                    <BingoBoard data={item} />
                  </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={data?.totalPageCount}
          variant="outlined"
          color="secondary"
          onChange={(_, page) => handleClickPagnation(page)}
        />
      </Container>
    </Box>
  );
};

export default BingoBoardList;
