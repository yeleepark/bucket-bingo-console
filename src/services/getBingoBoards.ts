import axios from 'axios';
import { BingoBoardsResponse } from './types';

const BINGO_BOARDS_API_URL = `/dummy/getBingoBoards.json`;

const getBingoBoards = async (): Promise<BingoBoardsResponse> => {
  const response = await axios.get<BingoBoardsResponse>(BINGO_BOARDS_API_URL);
  return response?.data;
};

export { getBingoBoards, BINGO_BOARDS_API_URL };
