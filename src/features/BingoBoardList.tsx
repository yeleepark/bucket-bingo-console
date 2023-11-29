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
import { BingoBoardsResponse } from '@services/types';

interface BingoBoardListProps {
  data: BingoBoardsResponse['items'];
}
const BingoBoardList = ({ data }: BingoBoardListProps) => (
  <Box sx={{ py: 10 }}>
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h3">Bucket Bingo</Typography>
      </Box>
      <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {data?.map((item) => (
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
);

export default BingoBoardList;
