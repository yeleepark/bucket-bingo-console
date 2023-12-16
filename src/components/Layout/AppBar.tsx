import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Box,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';

import Link from 'next/link';
import { FC } from 'react';
import PopupTriggerButton from '@components/Button/PopupTriggerButton';
import BingoBoardDialog from '@components/Bingo-/BingoBoardDialog';

interface AppBarProps extends MuiAppBarProps {}

const AppBar: FC<AppBarProps> = (props) => {
  const { ...muiProps } = props;
  return (
    <MuiAppBar position="relative" color="transparent" {...muiProps}>
      <Toolbar sx={{ justifyContent: `space-between` }}>
        <Link href={`/`}>
          <Box display={`flex`} alignItems={`center`}>
            <GridViewSharpIcon color="primary" />
            <Typography variant="h6" noWrap ml={1}>
              BUCKET BINGO
            </Typography>
          </Box>
        </Link>
        <PopupTriggerButton popup={<BingoBoardDialog />} variant={`contained`}>
          도전
        </PopupTriggerButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
