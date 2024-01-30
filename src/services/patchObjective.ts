import axios from 'axios';

import { BingoBoard } from './schema';

const patchBingoStart = async (boardId: BingoBoard['id']) => {
  const response = await axios.patch(`boards/${boardId}/start`);
  return response?.data;
};

export { patchBingoStart };
