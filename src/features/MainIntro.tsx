import { Box, Button, Container, Typography } from '@mui/material';

const MainIntro = () => (
  <Box sx={{ py: 10, bgcolor: `blueGrey.50` }}>
    <Container maxWidth="xl">
      <Typography variant="h3">Welcome!</Typography>
      <Typography variant="body2">
        <Typography component={`strong`} variant="body2" color={`primary`}>
          버킷빙고
        </Typography>
        는 당신의 꿈과 목표를 빙고판으로 만들어 도전과 성장의 여정으로 바꿉니다.
      </Typography>
      <Typography variant="body2">
        함께 빙고 대결을 통해 목표를 달성하고, 스스로의 한계를 뛰어넘으세요.
      </Typography>
      <Button variant={`outlined`}>알아보기</Button>
      <Button variant={`contained`}>만들기</Button>
    </Container>
  </Box>
);

export default MainIntro;
