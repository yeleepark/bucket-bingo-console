import Link from 'next/link';
import { FC, ReactElement, cloneElement } from 'react';

import DialogTriggerButton from '@components/Button/DialogTriggerButton';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Box,
  AppBarProps,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AddBingoBoardDialog from '@features/Dialog/AddBingoBoardDialog';

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AppBar: FC<AppBarProps> = (props) => {
  return (
    <ElevationScroll {...props}>
      <MuiAppBar color={'transparent'} sx={{ backdropFilter: `blur(12px)` }}>
        <Toolbar sx={{ justifyContent: `space-between` }}>
          <Link href={'/'}>
            <Box display={'flex'} alignItems={'center'}>
              <GridViewSharpIcon color={'primary'} />
              <Typography variant={'h6'} noWrap ml={1}>
                BUCKET BINGO
              </Typography>
            </Box>
          </Link>
          <DialogTriggerButton
            popup={<AddBingoBoardDialog />}
            variant={'text'}
            disableRipple
            disableTouchRipple
            sx={{ fontWeight: 700 }}
          >
            도전하기
          </DialogTriggerButton>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
