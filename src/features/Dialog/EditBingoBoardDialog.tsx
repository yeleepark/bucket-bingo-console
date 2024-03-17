import { useCallback } from 'react';

import ResponsiveDialog from '@components/Dialog/ResponsiveDialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface EditBingoBoardDialogProps {
  open: boolean;
  onClose?: () => void;
}

const EditBingoBoardDialog = (props: EditBingoBoardDialogProps) => {
  const { open, onClose } = props;
  return (
    <ResponsiveDialog
      component={'form'}
      open={open}
      onClose={onClose}
      maxWidth={'sm'}
    >
      <DialogTitle>빙고 수정</DialogTitle>
      <DialogContent>여기용</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>닫기</Button>
        <Button type={'submit'} variant={'contained'}>
          저장
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
export default EditBingoBoardDialog;
