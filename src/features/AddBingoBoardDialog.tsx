import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import usePostBingoBoard from '@hooks/mutaions/usePostBingoBoard';
import { PostBoardRequest } from '@services/postBoard';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Grid,
  TextField,
  Theme,
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

  const { register, handleSubmit } = useForm<PostBoardRequest>({
    defaultValues: { size: 5 },
  });
  const { mutate } = usePostBingoBoard();
  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ResponsiveDialog
      open={open}
      onClose={handleOnClose}
      onSubmit={handleSubmit((data) => mutate(data))}
      component={'form'}
      maxWidth={'sm'}
      fullWidth
    >
      <DialogTitle>빙고생성하기</DialogTitle>
      <DialogContent>
        <Grid container columnSpacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              inputProps={{ ...register(`name`) }}
              InputLabelProps={{ shrink: true }}
              label={'빙고이름'}
              margin={'normal'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'설명'}
              fullWidth
              inputProps={{ ...register(`description`) }}
              margin={'normal'}
              multiline
              rows={3}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type={'number'}
              InputLabelProps={{ shrink: true }}
              margin={'normal'}
              label={'빙고판의 사이즈'}
              inputProps={{
                ...register(`size`),
                type: `number`,
                min: 5,
                max: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type={'number'}
              InputLabelProps={{ shrink: true }}
              margin={'normal'}
              label={'목표갯수(줄)'}
              inputProps={{
                ...register(`size`),
                type: `number`,
                min: 5,
                max: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              type={'date'}
              margin={'normal'}
              label={'만료일'}
              InputLabelProps={{ shrink: true }}
              inputProps={{ ...register(`endDate`) }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>닫기</Button>
        <Button type={'submit'} variant={'contained'}>
          저장
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};

export default AddBingoBoardDialog;
