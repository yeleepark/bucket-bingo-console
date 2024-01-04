import { useRouter } from 'next/router';

import useBingoBoardsQuery from '@hooks/queries/useBingoBoardsQuery';

import BingoBoard from '@components/Bingo/BingoBoard';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';

import calculateBingoSuccessCount from '@utils/calculateSuccessBingoCount';
import { getFormattedDateYYYYMMDD } from '@utils/dateFormat';

const BingoBoardList = () => {
  const router = useRouter();
  const { data } = useBingoBoardsQuery();

  const handleClickPagnation = (page: number) => {
    const url = `${router.pathname}?pageOffset=${page - 1}`;
    router.push(url, `/`, { shallow: true });
  };

  return (
    <Box sx={{ py: 2 }}>
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
                elevation={2}
                onClick={() => router.push(`details/${item.id}`)}
                sx={{
                  height: `100%`,
                  cursor: `pointer`,
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <CardMedia sx={{ p: 2 }}>
                  <BingoBoard data={item} />
                </CardMedia>
                <CardContent>
                  <Typography fontSize={12} textAlign={`right`}>
                    {calculateBingoSuccessCount(item.size, item.squares)}줄 성공
                  </Typography>
                  <Typography variant={`subtitle1`}>{item?.name}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item?.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {getFormattedDateYYYYMMDD(item?.created?.at)}
                    {item?.endDate !== undefined
                      ? ` ~ ${getFormattedDateYYYYMMDD(item?.endDate)}`
                      : null}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box my={4} display={`flex`} justifyContent={`center`}>
          <Pagination
            color={`primary`}
            count={data?.totalPageCount}
            onChange={(_, page) => handleClickPagnation(page)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BingoBoardList;
