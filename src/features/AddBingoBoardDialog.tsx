import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { PostBoardsRequest, postBoards } from '@services/postBoard';
import { useMutation } from '@tanstack/react-query';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  InputLabel,
  TextField,
  useMediaQuery,
} from '@mui/material';
import theme from '@theme/theme';

const ResponsiveDialog = (props: DialogProps) => {
  const isFullScreen = useMediaQuery(theme?.breakpoints?.down('md'));
  return <Dialog fullScreen={isFullScreen} {...props} />;
};

const AddBingoBoardDialog = () => {
  const [open, setOpen] = useState(true);

  const { register, handleSubmit } = useForm<PostBoardsRequest>({
    defaultValues: { size: 5 },
  });
  const { mutate } = useMutation({
    mutationFn: (boards: PostBoardsRequest) => postBoards(boards),
  });
  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <ResponsiveDialog
      open={open}
      onClose={handleOnClose}
      onSubmit={handleSubmit((data) => mutate(data))}
      component={`form`}
      maxWidth={`md`}
      fullWidth
    >
      <DialogTitle>빙고생성하기</DialogTitle>
      <DialogContent>
        <Box py={2}>
          <InputLabel>빙고이름</InputLabel>
          <TextField
            inputProps={{ ...register(`name`) }}
            InputLabelProps={{ shrink: true }}
            placeholder="빙고이름"
          />
          <InputLabel>빙고크기</InputLabel>
          <TextField
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ ...register(`size`), min: 5, max: 10 }}
          />
          <InputLabel>설명</InputLabel>
          <TextField
            inputProps={{ ...register(`description`) }}
            placeholder="description"
            InputProps={{ multiline: true, minRows: 3 }}
          />
          <InputLabel>만료일</InputLabel>
          <TextField type={`date`} inputProps={{ ...register(`endDate`) }} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>닫기</Button>
        <Button type={`submit`} variant="contained">
          저장
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
export default AddBingoBoardDialog;
