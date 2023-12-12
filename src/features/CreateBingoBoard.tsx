import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';
import { useCallback } from 'react';

interface CreateBingoBoardProps {
  open: boolean;
  onClose: () => void;
}
const CreateBingoBoard = ({ open, onClose }: CreateBingoBoardProps) => {
  const getDefaultDate = useCallback(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrow = today.toISOString().substr(0, 10);
    return tomorrow;
  }, []);
  return (
    <Dialog open={open} onClose={onClose} maxWidth={`md`} fullWidth>
      <form>
        <DialogTitle>빙고생성하기</DialogTitle>
        <DialogContent>
          <Box py={2}>
            <InputLabel>빙고이름</InputLabel>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="빙고이름"
            />
            <InputLabel>빙고크기</InputLabel>
            <TextField
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: 5, max: 10, defaultValue: 5 }}
            />
            <InputLabel>설명</InputLabel>
            <TextField
              placeholder="description"
              InputProps={{ multiline: true, minRows: 3 }}
            />
            <InputLabel>만료일</InputLabel>
            <TextField
              type={`date`}
              inputProps={{ defaultValue: getDefaultDate() }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>닫기</Button>
          <Button variant="contained">저장</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default CreateBingoBoard;
