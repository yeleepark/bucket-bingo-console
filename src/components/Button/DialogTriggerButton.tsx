import { FC, ReactNode, useState } from 'react';

import { Button, ButtonProps as MuiButtonProps } from '@mui/material';

interface DialogTriggerButtonProps extends MuiButtonProps {
  popup: ReactNode;
}
const DialogTriggerButton: FC<DialogTriggerButtonProps> = (props) => {
  const { popup, ...muiProps } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} {...muiProps} />
      {open && popup}
    </>
  );
};

export default DialogTriggerButton;
