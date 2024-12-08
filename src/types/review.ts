import { ID } from '@/types/id';
import { User } from '@/types/user';

type Review = {
  id: ID;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export type { Review };
