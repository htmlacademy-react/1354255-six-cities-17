import { MOCK_COMMENTS } from '@/mocks/comments';
import { CommentRequest } from '@/types/commentRequest';
import { ID } from '@/types/id';

class CommentsApiService {
  #RATING_MIN = 1;
  #RATING_MAX = 5;
  #COMMENT_MIN_SYMBOLS = 50;

  getCommentsById(id: ID) {
    return MOCK_COMMENTS[id];
  }

  sendComment(offerId: ID, data: CommentRequest) {
    return { offerId, data };
  }

  isCommentValid({ rating, comment }: CommentRequest) {
    const isRatingValid = rating > this.#RATING_MIN && rating <= this.#RATING_MAX;
    const isCommentValid = comment.length >= this.#COMMENT_MIN_SYMBOLS;

    return isRatingValid && isCommentValid;
  }
}

export default new CommentsApiService();
