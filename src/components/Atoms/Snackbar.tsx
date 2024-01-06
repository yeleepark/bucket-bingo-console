import { FC, useState } from 'react';

import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';

/**
 * Snackbar
 * - Snackbar 컴포넌트는 기본적으로 3초 후에 자동으로 사라집니다.
 * @components
 */

const Snackbar: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <MuiSnackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      {...props}
    />
  );
};

export default Snackbar;
