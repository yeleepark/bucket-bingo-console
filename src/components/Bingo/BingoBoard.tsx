import { useEffect, useRef, useState } from 'react';

import { BingoBoard, BingoSqureStatus } from '@services/schema';

import AddSharpIcon from '@mui/icons-material/AddSharp';
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
          bgcolor: status === `DONE` ? `success.light` : `grey.A100`,
          borderRadius: 1,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        {status === `DRAFT` ? (
          <AddSharpIcon sx={{ width: 10, height: 10 }} />
        ) : (
          ``
        )}
      </Box>
    </Grid>
  );
};

interface BingoBoardProps {
  data: BingoBoard;
}
const BingoBoard = ({ data }: BingoBoardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.clientWidth);
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <Grid ref={ref} container columns={data.size} spacing={0.2} height={height}>
      {data?.squares?.map((i) => (
        <BingoSqure key={i.order} status={i.status} />
      ))}
    </Grid>
  );
};
export default BingoBoard;
