import { AppBar as MuiAppBar, Container, Toolbar } from '@mui/material';

const AppBar = () => (
  <MuiAppBar position="relative">
    <Toolbar>
      <Container maxWidth="xl">AppBar</Container>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
