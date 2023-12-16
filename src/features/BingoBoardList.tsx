import BingoBoard from '@components/Bingo/BingoBoard';
import BingoSqure from '@components/Bingo/BingoSqure';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { BoardsResponse } from '@services/getBoards';
import { useRouter } from 'next/router';

interface BingoBoardListProps {
  data: BoardsResponse['items'];
}
const BingoBoardList = ({ data }: BingoBoardListProps) => {
  const router = useRouter();
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="xl">
        <Box my={4}>
          <Typography variant="h6">🔥 빙고 대결 중 🔥</Typography>
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
                <CardActionArea>
                  <CardHeader
                    title={item.name}
                    subheader={item?.created?.at.toString() || `-`}
                  />
                  <CardMedia>
                    <CardContent>
                      <BingoBoard size={item.size}>
                        {item?.squares?.map((i) => (
                          <BingoSqure key={i.order} status={i.status} />
                        ))}
                      </BingoBoard>
                    </CardContent>
                  </CardMedia>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BingoBoardList;
