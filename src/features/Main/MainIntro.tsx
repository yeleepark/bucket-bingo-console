import dynamic from 'next/dynamic';

import DialogTriggerButton from '@components/Button/DialogTriggerButton';
import { NavigateNextRounded } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';

import AddBingoBoardDialog from '../Dialog/AddBingoBoardDialog';

const ConfettieLottie = dynamic(
  () => import('@components/Lottie/ConfettieLottie'),
  { ssr: false },
);

const MainIntro = () => (
  <Box py={2} height={'100dvh'} minHeight={445}>
    <Container
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
        height: `100%`,
      }}
    >
      <Box maxWidth={200} height={'40%'}>
        <ConfettieLottie />
      </Box>
      <Typography variant={'h3'} fontWeight={700} mb={1}>
        인생을 모험으로
      </Typography>
      <Typography component={'strong'} variant={'h6'}>
        버킷빙고로 숨은 행복을 찾아봐요
      </Typography>
      <DialogTriggerButton
        variant={'contained'}
        endIcon={<NavigateNextRounded />}
        popup={<AddBingoBoardDialog />}
        sx={{ mt: 2 }}
      >
        도전하기
      </DialogTriggerButton>
    </Container>
  </Box>
);

export default MainIntro;
