import { BingoBoard, BingoSqureStatus } from '@services/schema';

import { Box, Grid } from '@mui/material';

interface BingoSqureProps {
  status: BingoSqureStatus;
}
const BingoSqure = ({ status }: BingoSqureProps) => {
  return (
    <Grid item xs={1}>
      <Box
        sx={{
          height: `100%`,
          bgcolor: status === `DONE` ? `success.main` : `transparent`,
          color: status === `DONE` ? `common.white` : `common.black`,
          border: (theme) => `1px solid ${theme.palette.success.light}`,
          borderRadius: 1,
        }}
      />
    </Grid>
  );
};

interface BingoBoardProps {
  data: BingoBoard;
}
const BingoBoard = ({ data }: BingoBoardProps) => {
  return (
    <Grid
      container
      columns={data.size}
      spacing={0.2}
      sx={{ border: `1px solid red` }}
    >
      {data?.squares?.map((i) => (
        <BingoSqure key={i.order} status={i.status} />
      ))}
    </Grid>
  );
};
export default BingoBoard;
