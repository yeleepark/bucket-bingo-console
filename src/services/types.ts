type BingoBoardStatus = `DRAFT` | `ACTIVE` | `INACTIVE`;
type BingoSqureStatus = `TODO` | `IN_PROGRESS` | `DONE`;

interface BingoSqureResponse {
  order: number;
  status: BingoSqureStatus;
  updatedAt: Date;
}

interface BingoBoardsResponse {
  items: Array<{
    id: string;
    name: string;
    description?: string;
    size: number;
    squares: BingoSqureResponse[];
    status: BingoSqureStatus;
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

export type {
  BingoBoardStatus,
  BingoSqureStatus,
  BingoSqureResponse,
  BingoBoardsResponse,
};
