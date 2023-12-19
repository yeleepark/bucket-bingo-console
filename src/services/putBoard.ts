import axios from 'axios';

import { BingoObjective } from './schema';

interface PutBoardRequest {
  name: string;
  description: string;
  endDate: Date;
  squares: {
    content: BingoObjective['content'];
    totalCount: BingoObjective['totalCount'];
  }[];
}

const putBoard = async (id: string, request: PutBoardRequest) => {
  const response = await axios.put(`/boards/${id}`, request);
  return response?.data;
};

export { putBoard };
export type { PutBoardRequest };
