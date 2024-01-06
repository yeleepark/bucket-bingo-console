import { useRouter } from 'next/router';

import useBingoBoardsQuery from '@hooks/queries/useBingoBoardsQuery';
import { BingoBoard as BingoBoardType } from '@services/schema';

import Snackbar from '@components/Atoms/Snackbar';
import BingoBoard from '@components/Bingo/BingoBoard';
import BingoListCard from '@components/Bingo/BingoListCard';
import {
  Alert,
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from '@mui/material';

import calculateBingoSuccessCount from '@utils/calculateSuccessBingoCount';
import { getFormattedDateYYYYMMDD } from '@utils/dateFormat';

const BingoBoardList = () => {
  const router = useRouter();

  const { data, status } = useBingoBoardsQuery();

  const handleClickPagnation = (page: number) => {
    const url = `${router.pathname}?pageOffset=${page - 1}`;
    router.push(url, `/`, { shallow: true });
  };

  const navigateToDetailPage = (id: BingoBoardType['id']) => {
    router.push(`details/${id}`, undefined, {
      shallow: true,
    });
  };

  if (status === `error`) {
    return (
      <Snackbar>
        <Alert severity="error" variant="filled">
          일시적인 통신 장애로 목록을 불러오는데 실패했습니다.
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Container sx={{ height: `100%` }}>
      <Box my={4}>
        <Typography variant="h6" fontWeight={`bold`}>
          🔥 대결중인 빙고 🔥
        </Typography>
      </Box>
      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4 }}
        spacing={4}
        height={`100%`}
        alignItems={`stretch`}
      >
        {status === `pending` ? (
          <>
            {Array.from({ length: 12 })?.map((_, index) => (
              <Grid key={index} item xs={1}>
                <BingoListCard>
                  <Box p={2} height={`100%`}>
                    <Skeleton
                      height={`100%`}
                      sx={{ bgColor: `grey.200` }}
                      variant="rounded"
                      animation="wave"
                    />
                  </Box>
                </BingoListCard>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {data?.items.map((item) => (
              <Grid key={item.id} item xs={1}>
                <BingoListCard onClick={() => navigateToDetailPage(item?.id)}>
                  <BingoBoard data={item} />
                  <Box>
                    <Typography fontSize={12} textAlign={`right`}>
                      {calculateBingoSuccessCount(item.size, item.squares)}줄
                      성공
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
                  </Box>
                </BingoListCard>
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Box my={4} display={`flex`} justifyContent={`center`}>
        <Pagination
          color={`primary`}
          count={data?.totalPageCount}
          onChange={(_, page) => handleClickPagnation(page)}
        />
      </Box>
    </Container>
  );
};

export default BingoBoardList;
