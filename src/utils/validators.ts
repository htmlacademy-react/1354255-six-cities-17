import type { Comment } from '@/types/comment';
import { MIN_CHARACTERS_IN_REVIEW } from './consts';

const ReviewValidation = {
  RATING_MIN: 1,
  RATING_MAX: 5,
  COMMENT_MIN_SYMBOLS: MIN_CHARACTERS_IN_REVIEW,
  COMMENT_MAX_SYMBOLS: 300,
};

const AuthValidation = {
  PASSWORD_REQUIRED_SYMBOLS: [/\d/, /[A-zА-яЁё]/],
};

const isReviewValid = ({ rating, comment }: Comment) => {
  const isRatingValid =
    rating >= ReviewValidation.RATING_MIN &&
    rating <= ReviewValidation.RATING_MAX;

  const isCommentValid =
    comment.length >= ReviewValidation.COMMENT_MIN_SYMBOLS &&
    comment.length <= ReviewValidation.COMMENT_MAX_SYMBOLS;

  return isRatingValid && isCommentValid;
};

const isPasswordValid = (password: string) =>
  AuthValidation.PASSWORD_REQUIRED_SYMBOLS.every((reg) => reg.test(password));

export { isPasswordValid, isReviewValid };
