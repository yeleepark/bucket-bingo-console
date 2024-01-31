import { BingoBoard } from './schema';

import axiosInstance from '../plugins/axios';

const patchBoardStart = async (boardId: BingoBoard['id']) => {
  const response = await axiosInstance.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/${boardId}/start`,
  );
  return response?.data;
};

export { patchBoardStart };
