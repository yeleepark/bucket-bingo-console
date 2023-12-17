import axios from 'axios';
import { BingoBoard } from './schema';

interface PostBoardsRequest {
  name: BingoBoard['name'];
  size: BingoBoard['size'];
  description: BingoBoard['description'];
  endDate: BingoBoard['endDate'];
}

const postBoards = async (request: PostBoardsRequest) => {
  const response = await axios.put(`/boards`, request);
  return response?.data;
};

export { postBoards };
export type { PostBoardsRequest };
