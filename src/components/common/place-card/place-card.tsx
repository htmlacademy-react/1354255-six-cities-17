import { PlaceCard as PlaceCardType } from '@/types/place-card';
import { AppRoute } from '@/utils/consts';
import { capitalizeFirstLetter, convertRatingToStyle } from '@/utils/helpers';
import { Link } from 'react-router-dom';

type PlaceCardProps = Readonly<{
  place: PlaceCardType;
  cardWrapperClass?: string;
  imageWrapperClass?: string;
  imageWidth?: number;
  imageHeight?: number;
}>

function PlaceCard({
  place,
  cardWrapperClass,
  imageWrapperClass,
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
    <article className={`${cardWrapperClass} place-card`}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${name}`}>
          <img
            className="place-card__image"
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>

      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
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
