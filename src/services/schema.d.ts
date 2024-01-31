type BingoBoardStatus = `DRAFT` | `ACTIVE` | `INACTIVE`;
type BingoSqureStatus = `TODO` | `IN_PROGRESS` | `DONE`;
type User = { id: string };
type UserContext = { at: string; by: User };
type BingoObjective = {
  content: string;
  totalCount: number;
  currentCount: number;
};
type BingoSquare = {
  order: number;
  objective: BingoObjective | null;
  status: BingoSqureStatus;
  updatedAt: string;
};
type BingoBoard = {
  id: string;
  name: string;
  description?: string;
  size: number;
  squares: BingoSquare[];
  status: BingoBoardStatus;
  bingo: { targetCount: number; currentCount: number };
  startDate?: string;
  endDate?: string;
  created: UserContext;
  updated: UserContext;
};
export type {
  BingoBoardStatus,
  BingoSqureStatus,
  User,
  UserContext,
  BingoSquare,
  BingoObjective,
  BingoBoard,
};
