import { useRouter } from 'next/router';

import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { useQuery } from '@tanstack/react-query';

const useBingoBoardsQuery = () => {
  const { query } = useRouter();
  const pageOffset = (query.pageOffset ?? '0') as string;
  const pageSize = 12;
  return useQuery({
    queryKey: [BINGO_BOARDS_API_URL, JSON.stringify({ pageOffset, pageSize })],
    queryFn: () => getBoards({ pageOffset, pageSize }),
  });
};

export default useBingoBoardsQuery;
