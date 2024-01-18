import axios from 'axios';

import { BingoBoard } from './schema';

interface PostBoardRequest {
  name: BingoBoard['name'];
  size: BingoBoard['size'];
  targetCount: BingoBoard['bingo']['targetCount'];
  description: BingoBoard['description'];
  endDate: BingoBoard['endDate'];
}

/**
 * 빙고판 생성 API
 * @param request
 * @param request.name 빙고판의 이름
 * @param request.size 빙고판의 크기
 * @param request.description 빙고판의 설명
 * @param request.endDate 빙고판의 종료일
 */
const postBoard = async (request: PostBoardRequest) => {
  const response = await axios.put(`/boards`, request);
  return response?.data;
};

export { postBoard };
export type { PostBoardRequest };
