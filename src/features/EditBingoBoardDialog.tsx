import { useCallback, useState } from 'react';

import ResponsiveDialog from '@components/Dialog/ResponsiveDialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface EditBingoBoardDialogProps {
  open?: boolean;
  onClose?: () => void;
}

const EditBingoBoardDialog = (props: EditBingoBoardDialogProps) => {
  const [open, setOpen] = useState(true);
  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, []);
  console.log(open);
  return (
    <ResponsiveDialog
      component={'form'}
      open={open}
      onClose={handleOnClose}
      maxWidth={'sm'}
    >
      <DialogTitle>빙고 수정</DialogTitle>
      <DialogContent>여기용</DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>닫기</Button>
        <Button type={'submit'} variant={'contained'}>
          저장
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
export default EditBingoBoardDialog;
