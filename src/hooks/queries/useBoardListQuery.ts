import { BINGO_BOARDS_API_URL, getBoards } from '../../services/getBoards';
import { useQuery } from '@tanstack/react-query';

const useBoardListQuery = () => {
  return useQuery({
    queryKey: [BINGO_BOARDS_API_URL],
    queryFn: () => getBoards(),
  });
};

export default useBoardListQuery;
