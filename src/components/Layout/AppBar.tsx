import Link from 'next/link';
import { ReactElement, cloneElement } from 'react';

import BingoBoardDialog from '@components/Bingo/BingoBoardDialog';
import PopupTriggerButton from '@components/Button/PopupTriggerButton';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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

const AppBar = (props: Props) => {
  return (
    <ElevationScroll {...props}>
      <MuiAppBar color="transparent" sx={{ backdropFilter: `blur(12px)` }}>
        <Toolbar sx={{ justifyContent: `space-between` }}>
          <Link href={`/`}>
            <Box display={`flex`} alignItems={`center`}>
              <GridViewSharpIcon color="primary" />
              <Typography variant="h6" noWrap ml={1}>
                BUCKET BINGO
              </Typography>
            </Box>
          </Link>
          <PopupTriggerButton
            popup={<BingoBoardDialog />}
            variant={`text`}
            sx={{ fontWeight: 700 }}
          >
            도전하기
          </PopupTriggerButton>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
