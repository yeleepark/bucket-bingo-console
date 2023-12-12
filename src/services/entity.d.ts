type BingoBoardStatus = `DRAFT` | `ACTIVE` | `INACTIVE`;
type BingoSqureStatus = `TODO` | `IN_PROGRESS` | `DONE`;
type User = { id: string };
type UserContext = { at: Date; by: User };
type BingoObjective = {
  content: string;
  totalCount: number;
  currentCount: number;
};
type BingoSqare = {
  order: number;
  objective?: BingoObjective;
  status: BingoSqureStatus;
  updatedAt: Date;
};
type BingoBoard = {
  id: number;
  name: string;
  description: string | null;
  size: 5 | 6 | 7 | 8 | 9 | 10 | number;
  squares: BingoSqare[];
  status: BingoBoardStatus;
  startDate: Date | null;
  endDate: Date | null;
  created: UserContext;
};
export type {
  BingoBoardStatus,
  BingoSqureStatus,
  User,
  UserContext,
  BingoSqare,
  BingoObjective,
  BingoBoard,
};
