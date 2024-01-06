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
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

const ResponsiveDialog = (props: DialogProps) => {
  const isFullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );
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
      maxWidth={`sm`}
      fullWidth
    >
      <DialogTitle>
        <Typography variant="h5">빙고생성하기</Typography>
      </DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Box display={`flex`}>
            <TextField
              inputProps={{ ...register(`name`) }}
              InputLabelProps={{ shrink: true }}
              label="빙고이름"
              margin={`normal`}
              sx={{ width: `80%`, mr: 2 }}
            />
          </Box>
          <TextField
            type="number"
            InputLabelProps={{ shrink: true }}
            margin={`normal`}
            label={`size`}
            inputProps={{
              ...register(`size`),
              type: `number`,
              min: 5,
              max: 10,
            }}
            sx={{ minWidth: 120 }}
          />
          <TextField
            type="number"
            InputLabelProps={{ shrink: true }}
            margin={`normal`}
            label={`size`}
            inputProps={{
              ...register(`size`),
              type: `number`,
              min: 5,
              max: 10,
            }}
            sx={{ minWidth: 120 }}
          />
          <TextField
            label="설명"
            fullWidth
            inputProps={{ ...register(`description`) }}
            margin={`normal`}
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type={`date`}
            margin={`normal`}
            label="만료일"
            InputLabelProps={{ shrink: true }}
            inputProps={{ ...register(`endDate`) }}
          />
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
