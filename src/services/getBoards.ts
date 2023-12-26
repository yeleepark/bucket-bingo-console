import axios from 'axios';

import { BingoBoard } from './schema';

const BINGO_BOARDS_API_URL = `/dummy/getBoards.json`;

interface BoardsResponse {
  items: BingoBoard[];
  totalCount: number;
  pageSize: number;
  pageOffset: number;
  totalPageCount: number;
}

const getBoards = async (params: {
  pageSize: string;
  pageOffset: string;
}): Promise<BoardsResponse> => {
  const response = await axios.get<BoardsResponse>(BINGO_BOARDS_API_URL, {
    params: params,
  });
  return response?.data;
};

export { getBoards, BINGO_BOARDS_API_URL };
export type { BoardsResponse };
