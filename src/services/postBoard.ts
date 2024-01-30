import { BingoBoard } from './schema';

import axiosInstance from '../plugins/axios';

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
 * @param request.targetCount 빙고판의 목표 줄 개수
 * @param request.description 빙고판의 설명
 * @param request.endDate 빙고판의 종료일
 */
const postBoard = async (request: PostBoardRequest) => {
  const response = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/boards`,
    request,
  );
  return response?.data;
};

export { postBoard };
export type { PostBoardRequest };
