import axios from 'axios';

import { BingoBoard, BingoSqare, BingoSqureStatus } from './schema';

interface PatchSquareRequest {
  status: BingoSqureStatus;
}
const patchSquare = async (
  boardId: BingoBoard['id'],
  squareOrder: BingoSqare['order'],
  req: PatchSquareRequest,
) => {
  const response = await axios.patch(
    `boards/${boardId}/squares/${squareOrder}`,
    req,
  );
  return response?.data;
};

export { patchSquare };
