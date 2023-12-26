import { useRouter } from 'next/router';

import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { useQuery } from '@tanstack/react-query';

const useBingoBoardsQuery = () => {
  const { query } = useRouter();
  const pageSize = (query.pageSize || '6') as string; // 기본 페이지 크기 설정
  const pageOffset = (query.pageOffset || '1') as string; // 기본 페이지 오프셋 설정
  return useQuery({
    queryKey: [BINGO_BOARDS_API_URL, JSON.stringify({ pageSize, pageOffset })],
    queryFn: () => getBoards({ pageSize, pageOffset }),
  });
};

export default useBingoBoardsQuery;
