import { Box, Container, Typography } from '@mui/material';

const MainIntro = () => (
  <Box sx={{ bgcolor: `blueGrey.50`, py: 10 }}>
    <Container maxWidth="xl">
      <Typography variant="h6">목표, 도전, 성장!</Typography>
      <Typography variant="body2">
        <strong>버킷빙고</strong>는 당신의 꿈과 목표를 빙고판으로 만들어 도전과
        성장의 여정으로 바꿉니다.
      </Typography>
      <Typography variant="body2">
        함께 빙고 대결을 통해 목표를 달성하고, 스스로의 한계를 뛰어넘으세요.
      </Typography>
      <Typography variant="body1">
        지금 <strong>버킷빙고</strong>에 가입하고, 당신의 꿈을 현실로 만드는
        여정을 시작하세요. 함께 도전하고 성장하세요!
      </Typography>
    </Container>
  </Box>
);

export default MainIntro;
