import { PostBoardRequest, postBoard } from '@services/postBoard';
import { useMutation } from '@tanstack/react-query';

const usePostBingoBoard = () => {
  return useMutation({
    mutationFn: (boards: PostBoardRequest) => postBoard(boards),
  });
};

export default usePostBingoBoard;
