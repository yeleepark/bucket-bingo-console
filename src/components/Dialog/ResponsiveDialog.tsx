import { Dialog, DialogProps, Theme, useMediaQuery } from '@mui/material';

const ResponsiveDialog = (props: DialogProps) => {
  const isFullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );
  return <Dialog fullScreen={isFullScreen} {...props} />;
};
export default ResponsiveDialog;
