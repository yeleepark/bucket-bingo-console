import { BingoBoard } from './schema';

import axiosInstance from '../plugins/axios';

const BINGO_BOARDS_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/boards`;

interface GetBoardsResponse {
  items: BingoBoard[];
  totalCount: number;
  pageSize: number;
  pageOffset: number;
  totalPageCount: number;
}

const getBoards = async (params?: {
  pageOffset: string;
  pageSize: number;
}): Promise<GetBoardsResponse> => {
  const response = await axiosInstance.get<GetBoardsResponse>(
    BINGO_BOARDS_API_URL,
    { params: params },
  );
  return response?.data;
};

export { getBoards, BINGO_BOARDS_API_URL };
export type { GetBoardsResponse };
