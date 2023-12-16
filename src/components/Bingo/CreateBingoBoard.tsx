import { Button } from '@mui/material';
import React, { useState } from 'react';

const CreateBingoBoard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
      만들기
    </Button>
  );
};

export default CreateBingoBoard;
