import { Button, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, ReactNode, useState } from 'react';

interface PopupTriggerButtonProps extends MuiButtonProps {
  popup: ReactNode;
}
const PopupTriggerButton: FC<PopupTriggerButtonProps> = (props) => {
  const { popup, ...muiProps } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} {...muiProps} />
      {open && popup}
    </>
  );
};

export default PopupTriggerButton;
