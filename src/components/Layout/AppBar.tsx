import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';

const AppBar = () => (
  <MuiAppBar position="relative" color="transparent">
    <Toolbar sx={{ justifyContent: `space-between` }}>
      <Box display="flex" alignItems="center">
        <GridViewSharpIcon color="primary" />
        <Typography variant="h6" noWrap ml={1}>
          BUCKET BINGO
        </Typography>
      </Box>
      <Button variant="contained" color="primary">
        만들기
      </Button>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
