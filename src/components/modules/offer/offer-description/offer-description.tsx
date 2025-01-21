import { memo } from 'react';

import BookmarkButton from '@/components/common/bookmark-button/bookmark-button';
import Rating from '@/components/common/rating/rating';
import OfferFeatures from '~/offer/offer-features/offer-features';
import OfferInside from '~/offer/offer-inside/offer-inside';

import { OfferFull } from '@/types/offer';
import { BookmarkType, RatingType } from '@/utils/consts';

const BOOKMARK_STYLES = {
  type: BookmarkType.Offer,
  width: 31,
  height: 33,
};

type OfferDescriptionProps = Readonly<{
  offer: OfferFull;
  onUpdateInfo?: () => void;
}>;

function OfferDescription({
  offer,
  onUpdateInfo,
}: OfferDescriptionProps): JSX.Element {
  return (
    <>
      {offer.isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="offer__name-wrapper">
        <h1 className="offer__name">{offer.title}</h1>

        <BookmarkButton
          isActive={offer.isFavorite}
          offer={offer}
          onUpdateInfo={onUpdateInfo}
          {...BOOKMARK_STYLES}
        />
      </div>

      <Rating type={RatingType.Offer} rating={offer.rating} />
      <OfferFeatures
        type={offer.type}
        bedroomsCount={offer.bedrooms}
        maxAdults={offer.maxAdults}
      />

      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>

      <OfferInside insideItems={offer.goods} />
    </>
  );
}

export default memo(OfferDescription);
