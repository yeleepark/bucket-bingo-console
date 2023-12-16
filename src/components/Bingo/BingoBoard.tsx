import { Grid } from '@mui/material';
import { ReactNode, useRef } from 'react';

interface BingoBoardProps {
  size: number;
  children: ReactNode;
}
const BingoBoard = ({ size, children }: BingoBoardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Grid container columns={size} ref={ref}>
      {children}
    </Grid>
  );
};
export default BingoBoard;
