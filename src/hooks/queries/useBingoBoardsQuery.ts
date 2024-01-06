import { useRouter } from 'next/router';

import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { useQuery } from '@tanstack/react-query';

const useBingoBoardsQuery = () => {
  const { query } = useRouter();
  const pageOffset = (query.pageOffset ?? '1') as string;
  return useQuery({
    queryKey: [BINGO_BOARDS_API_URL, JSON.stringify({ pageOffset })],
    queryFn: () => getBoards({ pageOffset }),
  });
};

export default useBingoBoardsQuery;
