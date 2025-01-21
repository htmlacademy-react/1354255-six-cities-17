import { clsx } from 'clsx';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import BookmarkButton from '@/components/common/bookmark-button/bookmark-button';
import Rating from '@/components/common/rating/rating';

import { ValueOf } from '@/types/helpers';
import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer';
import {
  AppRoute,
  BookmarkType,
  PlaceCardType,
  RatingType,
} from '@/utils/consts';
import { capitalizeFirstLetter } from '@/utils/helpers';

const BOOKMARK_STYLES = {
  type: BookmarkType.PlaceCard,
  width: 18,
  height: 19,
};

type PlaceCardProps = Readonly<{
  place: OfferCard;
  cardType: ValueOf<typeof PlaceCardType>;
  imageWidth?: number;
  imageHeight?: number;
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
  onUpdateInfo?: () => void;
}>;

function PlaceCard({
  place,
  cardType,
  imageWidth = 260,
  imageHeight = 200,
  onMouseOver,
  onMouseLeave,
  onUpdateInfo
}: PlaceCardProps): JSX.Element {
  const {
    previewImage,
    isPremium,
    isFavorite,
    title,
    price,
    rating,
    type,
    id,
  } = place;

  const handleMouseEnter = useCallback(
    () => onMouseOver?.(id),
    [id, onMouseOver]
  );

  const handleMouseLeave = useCallback(() => onMouseLeave?.(), [onMouseLeave]);

  return (
    <article
      className={clsx('place-card', `${cardType}__card`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt=""
          />
        </Link>
      </div>

      <div className={`${cardType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton isActive={isFavorite} offer={place} onUpdateInfo={onUpdateInfo} {...BOOKMARK_STYLES} />
        </div>

        <Rating rating={rating} type={RatingType.PlaceCard} />

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {capitalizeFirstLetter(title)}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
