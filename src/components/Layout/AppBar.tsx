import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { useState } from 'react';
import CreateBingoBoard from '@features/CreateBingoBoard';
import { useRouter } from 'next/router';

const AppBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MuiAppBar position="relative" color="transparent">
        <Toolbar sx={{ justifyContent: `space-between` }}>
          <Box display="flex" alignItems="center">
            <GridViewSharpIcon color="primary" />
            <Typography
              variant="h6"
              noWrap
              ml={1}
              onClick={() => router.push('/')}
            >
              BUCKET BINGO
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            만들기
          </Button>
        </Toolbar>
      </MuiAppBar>
      <CreateBingoBoard open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AppBar;
