import {
  AppBar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Home() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Container maxWidth="xl">AppBar</Container>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Box sx={{ bgcolor: `blueGrey.50`, py: 10 }}>
            <Container maxWidth="xl">Intro</Container>
          </Box>
          <Box sx={{ py: 10 }}>
            <Container maxWidth="xl">
              <Typography variant="h3">Title</Typography>
              <Grid
                container
                columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                spacing={4}
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <Grid key={index} item xs={1}>
                    <Card>
                      <CardHeader title={`title`} subheader={`info`} />
                      <CardMedia>
                        <CardContent>컨텐츠</CardContent>
                      </CardMedia>
                      <CardActions disableSpacing>카드액션</CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </main>
      <Box
        component="footer"
        sx={{ bgcolor: `grey.800`, color: `common.white`, py: 10 }}
      >
        <Container maxWidth="xl">footer</Container>
      </Box>
    </>
  );
}
