import Rating from '@/components/common/rating/rating';
import { Review } from '@/types/review';
import { RatingType } from '@/utils/consts';
import { humanizeDate } from '@/utils/helpers';

type OfferReviewsListProps = Readonly<{
  reviews: Review[];
}>

function OfferReviewsList({ reviews }: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map(({
          comment,
          date,
          rating,
          user,
          id
        }) => (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>

            <div className="reviews__info">
              <Rating type={RatingType.Reviews} rating={rating} />

              <p className="reviews__text">
                {comment}
              </p>
              <time className="reviews__time" dateTime={date}>{humanizeDate(date)}</time>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default OfferReviewsList;
