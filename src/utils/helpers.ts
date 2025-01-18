import { ValueOf } from '@/types/helpers';
import { OfferCard } from '@/types/offer';
import { RequestStatus, SortType } from '@/utils/consts';
import { PayloadAction } from '@reduxjs/toolkit';

// 100% / 5 (max rating)
const RATING_COEF = 20;

const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const convertRatingToStyle = (rating: number) =>
  `${Math.round(rating) * RATING_COEF}%`;

const humanizeDate = (date: string) => {
  const event = new Date(date);

  return event.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const sortBy = {
  [SortType.POPULAR]: (offerCards: OfferCard[]) => [...offerCards],
  [SortType.HIGH_TO_LOW]: (offerCards: OfferCard[]) =>
    offerCards.toSorted((a, b) => a.price - b.price),
  [SortType.LOW_TO_HIGH]: (offerCards: OfferCard[]) =>
    offerCards.toSorted((a, b) => b.price - a.price),
  [SortType.TOP_RATED]: (offerCards: OfferCard[]) =>
    offerCards.toSorted((a, b) => a.rating - b.rating),
};

const sortOffers = (
  offerCards: OfferCard[],
  sortType: ValueOf<typeof SortType>
) => sortBy[sortType](offerCards);

const isRequestOK = (
  response: PayloadAction<unknown, string, { requestStatus: unknown }>
) => response.meta.requestStatus === RequestStatus.FULFILLED;

export {
  capitalizeFirstLetter,
  convertRatingToStyle,
  humanizeDate,
  isRequestOK,
  sortOffers
};
