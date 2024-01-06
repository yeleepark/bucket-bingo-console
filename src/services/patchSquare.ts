import axios from 'axios';

import { BingoBoard, BingoSquare, BingoSqureStatus } from './schema';

interface PatchSquareRequest {
  status: BingoSqureStatus;
}
const patchSquare = async (
  boardId: BingoBoard['id'],
  squareOrder: BingoSquare['order'],
  req: PatchSquareRequest,
) => {
  const response = await axios.patch(
    `boards/${boardId}/squares/${squareOrder}`,
    req,
  );
  return response?.data;
};

export { patchSquare };
