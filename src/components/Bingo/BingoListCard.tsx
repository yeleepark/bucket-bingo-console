import { FC, useEffect, useRef, useState } from 'react';

import { Card, CardProps, Stack } from '@mui/material';

const BingoListCard: FC<CardProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        setHeight(width * 1.5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { children, sx, ...restProps } = props;
  return (
    <Card
      variant={'outlined'}
      ref={cardRef}
      sx={{
        minHeight: height,
        height: `100%`,
        cursor: 'pointer',
        '&:hover': { boxShadow: 2 },
        ...sx,
      }}
      {...restProps}
    >
      <Stack p={2} height={'100%'} justifyContent={'space-between'}>
        {children}
      </Stack>
    </Card>
  );
};

export default BingoListCard;
