import dynamic from 'next/dynamic';

import { ArrowDownwardRounded, NavigateNextRounded } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';

const ConfettieLottie = dynamic(
  () => import('@components/Lottie/ConfettieLottie'),
  { ssr: false },
);

const MainIntro = () => (
  <Box
    sx={{
      display: `flex`,
      py: 10,
      bgcolor: `blueGrey.50`,
      height: `calc(100dvh - 64px)`,
    }}
  >
    <Container sx={{ textAlign: `center` }}>
      <Box width={`20%`} sx={{ mb: 4, mx: `auto` }}>
        <ConfettieLottie />
      </Box>
      <Typography variant="h3" fontWeight={700} mb={1}>
        인생을 모험으로
      </Typography>
      <Typography component={`strong`} variant="h6">
        버킷빙고로 숨은 행복을 찾아봐요
      </Typography>
      <Box my={2}>
        <Button endIcon={<NavigateNextRounded />}>도전하기</Button>
      </Box>
      <IconButton>
        <ArrowDownwardRounded />
      </IconButton>
    </Container>
  </Box>
);

export default MainIntro;
