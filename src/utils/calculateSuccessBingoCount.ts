import { BingoSquare } from '@services/schema';

const calculateBingoSuccessCount = (
  size: number,
  data: BingoSquare[],
): number => {
  const bingoBoardArray = Array.from({ length: size }, (_, i) =>
    Array.from(
      { length: size },
      (_, j) => data[i * size + j]?.status === 'DONE',
    ),
  );

  const horizontal = bingoBoardArray.reduce((bingoCount, row) => {
    const isBingo = row.every((value) => value);
    return bingoCount + (isBingo ? 1 : 0);
  }, 0);

  const vertical = Array.from({ length: size }, (_, j) => {
    const isBingo = bingoBoardArray.every((row) => row[j]);
    return isBingo ? 1 : 0;
  }).reduce((total: number, count: number) => total + count, 0);

  const mainDiagonal = bingoBoardArray.every((row, index) => row[index])
    ? 1
    : 0;

  const antiDiagonal = bingoBoardArray.every(
    (row, index) => row[size - 1 - index],
  )
    ? 1
    : 0;

  return horizontal + vertical + mainDiagonal + antiDiagonal;
};

export default calculateBingoSuccessCount;
