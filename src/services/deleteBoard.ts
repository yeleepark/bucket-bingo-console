import axios from 'axios';
import { BingoBoard } from './schema';

const deleteBoard = async (boardId: BingoBoard['id']) => {
  const response = await axios.delete(`boards/${boardId}`);
  return response?.data;
};

export { deleteBoard };
