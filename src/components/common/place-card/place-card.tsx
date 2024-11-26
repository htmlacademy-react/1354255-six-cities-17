import { Link } from 'react-router-dom';

import BookmarkButton from '@/components/common/bookmark-button/bookmark-button';

import { ValueOf } from '@/types/helpers';
import { PlaceCard as PlaceCardType } from '@/types/place-card';
import { AppRoute, BookmarkType, PlaceCardType as PlaceCardTypeEnum } from '@/utils/consts';
import { capitalizeFirstLetter, convertRatingToStyle } from '@/utils/helpers';

const BOOKMARK_STYLES = {
  type: BookmarkType.PlaceCard,
  width: 18,
  height: 19
};

type PlaceCardProps = Readonly<{
  place: PlaceCardType;
  cardType: ValueOf<typeof PlaceCardTypeEnum>;
  imageWidth?: number;
  imageHeight?: number;
}>

function PlaceCard({
  place,
  cardType,
  imageWidth = 260,
  imageHeight = 200
}: PlaceCardProps): JSX.Element {
  const {
    imageSrc,
    isPremium,
    name,
    price,
    rating,
    type
  } = place;

  return (
    <article className={`${cardType}__card place-card`}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${name}`}>
          <img
            className="place-card__image"
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={name}
          />
        </Link>
      </div>

      <div className={`${cardType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton isActive {...BOOKMARK_STYLES} />
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertRatingToStyle(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${name}`}>{capitalizeFirstLetter(name)}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
