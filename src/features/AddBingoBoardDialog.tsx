import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import usePostBingoBoard from '@hooks/mutaions/usePostBingoBoard';

import ResponsiveDialog from '@components/Dialog/ResponsiveDialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';

const AddBingoBoardDialog = () => {
  const [open, setOpen] = useState(true);

  const schema = yup.object().shape({
    name: yup.string().required(),
    size: yup.number().required().min(5).max(10),
    description: yup.string().required(),
    targetCount: yup.number().required().min(5).max(10),
    endDate: yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutateAsync } = usePostBingoBoard({
    onSuccess: () => setOpen(false),
  });
  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, []);
  const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  };

  return (
    <ResponsiveDialog
      component={'form'}
      open={open}
      onClose={handleOnClose}
      onSubmit={handleSubmit((data) => mutateAsync(data))}
      maxWidth={'sm'}
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
                ...register(`targetCount`),
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
              inputProps={{
                ...register(`endDate`, {
                  setValueAs: (value) => {
                    const dateObject = new Date(value);
                    return dateObject.toISOString();
                  },
                }),
                defaultValue: getTomorrow(),
                min: getTomorrow(),
              }}
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
