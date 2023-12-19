import { BINGO_BOARDS_API_URL, getBoards } from '@services/getBoards';
import { useQuery } from '@tanstack/react-query';

const useBingoBoardsQuery = () => {
  return useQuery({
    queryKey: [BINGO_BOARDS_API_URL],
    queryFn: () => getBoards(),
  });
};

export default useBingoBoardsQuery;
