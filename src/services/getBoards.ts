import axios from 'axios';

import { BingoBoard } from './schema';

const BINGO_BOARDS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/getBoards`;

interface GetBoardsResponse {
  items: BingoBoard[];
  totalCount: number;
  pageSize: number;
  pageOffset: number;
  totalPageCount: number;
}

const getBoards = async (params?: {
  pageSize: string;
  pageOffset: string;
}): Promise<GetBoardsResponse> => {
  const response = await axios.get<GetBoardsResponse>(BINGO_BOARDS_API_URL, {
    params: params,
  });
  return response?.data;
};

export { getBoards, BINGO_BOARDS_API_URL };
export type { GetBoardsResponse };
