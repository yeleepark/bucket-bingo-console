import axios from 'axios';

import { BingoBoard } from './schema';

const BINGO_BOARDS_API_URL = `/dummy/getBoards.json`;

interface GetBoardsResponse {
  items: BingoBoard[];
  totalCount: number;
  pageSize: number;
  pageOffset: number;
  totalPageCount: number;
}

const getBoards = async (params?: {
  pageOffset: string;
}): Promise<GetBoardsResponse> => {
  const response = await axios.get<GetBoardsResponse>(BINGO_BOARDS_API_URL, {
    params: params,
  });
  return response?.data;
};

export { getBoards, BINGO_BOARDS_API_URL };
export type { GetBoardsResponse };
