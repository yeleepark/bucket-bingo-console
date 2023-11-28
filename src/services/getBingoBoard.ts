import axios from 'axios';

type BingoBoardStatus = ``;
type BingoSqureStatus = `IN_PROGRESS` | `TODO` | `DONE`;
interface IBingoSqure {
  order: number;
  status: BingoSqureStatus;
  updatedAt: Date;
}
interface IBingoBoard {
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

const GET_BINGOBOARD_QK = `/dummy/bingo-boards.json`;

const getBingoBoardList = async (): Promise<IBingoBoard> => {
  const response = await axios.get<IBingoBoard>(`/dummy/bingo-boards.json`);
  return response?.data;
};

export { getBingoBoardList, GET_BINGOBOARD_QK };
export type { IBingoBoard };
