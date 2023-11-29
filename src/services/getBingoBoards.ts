import axios from 'axios';

type BingoBoardStatus = `DRAFT` | `ACTIVE` | `INACTIVE`;
type BingoSqureStatus = `IN_PROGRESS` | `TODO` | `DONE`;

interface IBingoSqure {
  order: number;
  status: BingoSqureStatus;
  updatedAt: Date;
}

interface IBingoBoardsResponse {
  items: Array<{
    id: string;
    name: string;
    description?: string;
    size: number;
    squares: IBingoSqure[];
    status: BingoBoardStatus;
    startDate: Date | null;
    endDate: Date | null;
    created: { at: Date; by: { id: string } };
    updated: { at: Date; by: { id: string } };
  }>;
  totalCount: number;
  pageSize: number;
  pageOffset: number;
  totalPageCount: number;
}

const BINGO_BOARDS_QUERY_KEY = `/dummy/bingo-boards.json`;

const getBingoBoardList = async (): Promise<IBingoBoardsResponse> => {
  const response = await axios.get<IBingoBoardsResponse>(
    `/dummy/bingo-boards.json`,
  );
  return response?.data;
};

export { getBingoBoardList, BINGO_BOARDS_QUERY_KEY };
export type { IBingoBoardsResponse };
