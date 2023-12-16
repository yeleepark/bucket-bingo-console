import { Grid } from '@mui/material';
import { ReactNode } from 'react';

interface BingoBoardProps {
  size: number;
  children: ReactNode;
}
const BingoBoard = ({ size, children }: BingoBoardProps) => {
  return (
    <Grid container columns={size} sx={{ border: `1px solid red` }}>
      {children}
    </Grid>
  );
};
export default BingoBoard;
