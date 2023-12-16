import { Box, Grid } from '@mui/material';
import { BingoSqureStatus } from '@services/entity';

interface BingoSqureProps {
  status: BingoSqureStatus;
}
const BingoSqure = ({ status }: BingoSqureProps) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          outline: (theme) => `1px dotted ${theme.palette.divider}`,
          bgcolor: status === `DONE` ? `success.main` : `common.white`,
          color: status === `DONE` ? `common.white` : `common.black`,
        }}
      >
        1
      </Box>
    </Grid>
  );
};

export default BingoSqure;
