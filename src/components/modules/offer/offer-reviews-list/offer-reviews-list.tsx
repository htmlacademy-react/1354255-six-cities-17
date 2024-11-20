import { convertRatingToStyle, humanizeDate } from '@/utils/helpers';

const REVIEWS = [
  {
    avatar: 'img/avatar-max.jpg',
    name: 'Max',
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24'
  }
];

function OfferReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        REVIEWS.map(({
          avatar,
          name,
          rating,
          text,
          date
        }) => (
          <li className="reviews__item" key={`${avatar}${date}`}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {name}
              </span>
            </div>

            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: convertRatingToStyle(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>

              <p className="reviews__text">
                {text}
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
