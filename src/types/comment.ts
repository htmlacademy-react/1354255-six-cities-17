import { User } from './user';

type Comment = {
  comment: string;
  rating: number;
};

type UserComment = Comment & {
  id: string;
  date: string;
  user: User;
};

type CommentRequest = {
  id: string;
  comment: Comment;
};

export type { Comment, CommentRequest, UserComment };
