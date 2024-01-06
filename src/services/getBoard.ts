import axios from 'axios';

import { BingoBoard } from './schema';

const BINGG_DETAIL_API = `/dummy/getBoard.json`;

type BoardsDetailResponse = BingoBoard;

const getBoard = async (id?: number): Promise<BoardsDetailResponse> => {
  const response = await axios.get<BoardsDetailResponse>(
    // `${BINGG_DETAIL_API}/${boardId}`,
    `${BINGG_DETAIL_API}`,
  );
  return response?.data;
};

export { getBoard, BINGG_DETAIL_API };
export type { BoardsDetailResponse };
