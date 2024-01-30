import axios from 'axios';

import { BingoBoard, BingoSquare } from './schema';

const patchBingoStart = async (
  boardId: BingoBoard['id'],
  squareId: BingoSquare['order'],
) => {
  const response = await axios.patch(`boards/${boardId}/start/${squareId}`);
  return response?.data;
};

export { patchBingoStart };
