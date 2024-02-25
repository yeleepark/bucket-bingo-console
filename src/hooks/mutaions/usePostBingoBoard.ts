import { PostBoardRequest, postBoard } from '@services/postBoard';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostBingoBoard = (
  options?: UseMutationOptions<PostBoardRequest, AxiosError, PostBoardRequest>,
) => {
  return useMutation({
    mutationFn: (boards: PostBoardRequest) => postBoard(boards),
    ...options,
  });
};

export default usePostBingoBoard;
