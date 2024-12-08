import BookmarkButton from '@/components/common/bookmark-button/bookmark-button';
import OfferFeatures from '~/offer/offer-features/offer-features';
import OfferInside from '~/offer/offer-inside/offer-inside';

import Rating from '@/components/common/rating/rating';
import { OfferFull } from '@/types/offer';
import { BookmarkType, RatingType } from '@/utils/consts';

const BOOKMARK_STYLES = {
  type: BookmarkType.Offer,
  width: 31,
  height: 33
};

type OfferDescriptionProps = Readonly<{
  offer: Omit<OfferFull, 'id' | 'city' | 'location' | 'description' | 'images' | 'host'>;
}>

function OfferDescription({ offer }: OfferDescriptionProps): JSX.Element {
  const {
    title,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    goods,
    bedrooms,
    maxAdults,
  } = offer;

  return (
    <>
      {
        isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      }

      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>

        <BookmarkButton isActive={isFavorite} {...BOOKMARK_STYLES} />
      </div>

      <Rating type={RatingType.Offer} rating={rating} />
      <OfferFeatures type={type} bedroomsCount={bedrooms} maxAdults={maxAdults} />

      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>

      <OfferInside insideItems={goods} />
    </>
  );
}

export default OfferDescription;
