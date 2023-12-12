import axios from 'axios';
import { BingoBoard } from './entity';

const BINGO_BOARDS_API_URL = `/dummy/getBoard.json`;

type BoardsDetailResponse = BingoBoard;

const getBoard = async (
  boardId: BingoBoard['id'],
): Promise<BoardsDetailResponse> => {
  const response = await axios.get<BoardsDetailResponse>(
    `${BINGO_BOARDS_API_URL}/${boardId}`,
  );
  return response?.data;
};

export { getBoard, BINGO_BOARDS_API_URL };
export type { BoardsDetailResponse };
