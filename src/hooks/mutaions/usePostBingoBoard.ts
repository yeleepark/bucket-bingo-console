import { PostBoardRequest, postBoard } from '@services/postBoard';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostBingoBoard = (
  options?: UseMutationOptions<PostBoardRequest, AxiosError, PostBoardRequest>,
) => {
  //TODO: 성공, 실패 시의 처리를 추가합니다.
  return useMutation({
    mutationFn: (boards: PostBoardRequest) => postBoard(boards),
    ...options,
  });
};

export default usePostBingoBoard;
