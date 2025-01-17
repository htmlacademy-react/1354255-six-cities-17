import { User } from './user';

type Comment = {
  review: string;
  rating: number;
};

type UserComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

type CommentRequest = {
  id: string;
  comment: Comment;
};

export type { Comment, CommentRequest, UserComment };
