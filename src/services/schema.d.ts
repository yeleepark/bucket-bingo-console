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
  description?: string;
  size: 5 | 6 | 7 | 8 | 9 | 10;
  squares: BingoSqare[];
  status: BingoBoardStatus;
  startDate?: Date;
  endDate?: Date;
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
