import BingoBoard from '@components/bingo/BingoBoard';
import BingoSqure from '@components/bingo/BingoSqure';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { BingoBoardsResponse } from '@services/types';
import { useRouter } from 'next/router';

interface BingoBoardListProps {
  data: BingoBoardsResponse['items'];
}
const BingoBoardList = ({ data }: BingoBoardListProps) => {
  const router = useRouter();
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h3">Bucket Bingo</Typography>
        </Box>
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          spacing={4}
          alignItems={`stretch`}
        >
          {data?.map((item) => (
            <Grid key={item.id} item xs={1}>
              <Card
                onClick={() => router.push(`details/${item.id}`)}
                sx={{ height: `100%` }}
              >
                <CardHeader
                  title={item.name}
                  subheader={item?.created?.at.toString() || `-`}
                />
                <CardMedia>
                  <CardContent>
                    <BingoBoard size={item.size}>
                      {item?.squares?.map((i) => (
                        <BingoSqure key={i.order} status={item.status} />
                      ))}
                    </BingoBoard>
                  </CardContent>
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BingoBoardList;
