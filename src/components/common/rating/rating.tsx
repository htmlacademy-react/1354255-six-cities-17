import { ValueOf } from '@/types/helpers';
import { RatingType } from '@/utils/consts';
import { convertRatingToStyle } from '@/utils/helpers';

type RatingProps = Readonly<{
  type: ValueOf<typeof RatingType>;
  rating: number;
}>

function Rating({ type, rating }: RatingProps): JSX.Element {
  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{ width: convertRatingToStyle(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      { type === RatingType.Offer && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
