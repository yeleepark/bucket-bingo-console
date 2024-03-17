import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { BingoBoard as BingoBoardType } from '@services/schema';

import BingoBoard from '@components/Bingo/BingoBoard';
import BingoListCard from '@components/Bingo/BingoListCard';
import { Box, Typography } from '@mui/material';

import AddBingoBoardDialog from '@features/Dialog/AddBingoBoardDialog';
import calculateBingoSuccessCount from '@utils/calculateSuccessBingoCount';
import { getFormattedDateYYYYMMDD } from '@utils/dateFormat';

const BingoBoardCard: FC<{ item?: BingoBoardType }> = ({ item }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    if (item === undefined) {
      setOpen(true);
    } else {
      router.push(`details/${item.id}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <BingoListCard onClick={handleOnClick}>
      {item === undefined ? (
        <Box
          height={`100%`}
          display={`flex`}
          alignItems={`center`}
          justifyContent={`center`}
        >
          빙고 만들기
          {open && <AddBingoBoardDialog />}
        </Box>
      ) : (
        <>
          <BingoBoard data={item} />
          <Box>
            {item?.status === `DRAFT` ? (
              <Typography fontSize={12} textAlign={'right'}>
                작성을 기다리고 있어요
              </Typography>
            ) : (
              <Typography fontSize={12} textAlign={'right'}>
                {calculateBingoSuccessCount(item.size, item.squares)}줄 성공
              </Typography>
            )}
            <Typography variant={'subtitle1'}>{item?.name}</Typography>
            <Typography variant={'body1'} color={'text.secondary'}>
              {item?.description}
            </Typography>
            <Typography variant={'body2'} color={'text.secondary'}>
              {item?.status === `DRAFT` ? (
                <>작성중</>
              ) : (
                <>
                  {getFormattedDateYYYYMMDD(item?.created?.at)}
                  {item?.endDate !== undefined
                    ? ` ~ ${getFormattedDateYYYYMMDD(item?.endDate)}`
                    : null}
                </>
              )}
            </Typography>
          </Box>
        </>
      )}
    </BingoListCard>
  );
};

export default BingoBoardCard;
