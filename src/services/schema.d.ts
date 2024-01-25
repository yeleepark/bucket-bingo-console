type BingoBoardStatus = `DRAFT` | `ACTIVE` | `INACTIVE`;
type BingoSqureStatus = `TODO` | `IN_PROGRESS` | `DONE`;
type User = { id: string };
type UserContext = { at: Date; by: User };
type BingoObjective = {
  content: string;
  totalCount: number;
  currentCount: number;
};
type BingoSquare = {
  order: number;
  objective: BingoObjective | null;
  status: BingoSqureStatus;
  updatedAt: Date;
};
type BingoBoard = {
  id: number;
  name: string;
  description?: string;
  size: 5 | 6 | 7 | 8 | 9 | 10;
  squares: BingoSquare[];
  status: BingoBoardStatus;
  bingo: { targetCount: number; currentCount: number };
  startDate?: Date;
  endDate?: Date;
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
