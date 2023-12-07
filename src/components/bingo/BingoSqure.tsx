import { Box, Grid } from '@mui/material';
import { BingoSqureStatus } from '@services/types';

interface BingoSqureProps {
  status: BingoSqureStatus;
}
const BingoSqure = ({ status }: BingoSqureProps) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          outline: `1px dotted black`,
          bgcolor: status === `DONE` ? `common.black` : `common.white`,
          color: status === `DONE` ? `common.white` : `common.black`,
        }}
      >
        1
      </Box>
    </Grid>
  );
};

export default BingoSqure;
