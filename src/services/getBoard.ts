import { BingoBoard } from './schema';

import axiosInstance from '../plugins/axios';

const BINGG_DETAIL_API = `/boards`;

type BoardsDetailResponse = BingoBoard;

const getBoard = async (
  id?: BingoBoard['id'],
): Promise<BoardsDetailResponse> => {
  console.log(id);
  const response = await axiosInstance.get<BoardsDetailResponse>(
    `${BINGG_DETAIL_API}/${id}`,
  );
  return response?.data;
};

export { getBoard, BINGG_DETAIL_API };
export type { BoardsDetailResponse };
