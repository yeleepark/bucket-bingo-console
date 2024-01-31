import axios from 'axios';

import { BingoBoard, BingoSquare } from './schema';

const patchBingoStart = async (
  boardId: BingoBoard['id'],
  squareId: BingoSquare['order'],
) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/${boardId}/start/${squareId}`,
  );
  return response?.data;
};

export { patchBingoStart };
