import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import usePostBingoBoard from '@hooks/mutaions/usePostBingoBoard';

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
  const { mutate } = usePostBingoBoard();
  const handleOnClose = useCallback(() => {
    setOpen(false);
  }, []);
  const getTomorrow = ()=>{
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10)
  }

  return (
    <ResponsiveDialog
      component={'form'}
      open={open}
      onClose={handleOnClose}
      onSubmit={handleSubmit((data) => mutate(data))}
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
              inputProps={{ ...register(`endDate`), 
              defaultValue: getTomorrow(),
              min: getTomorrow()
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
