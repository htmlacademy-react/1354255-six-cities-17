import { PayloadAction } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { UserComment } from '@/types/comment';
import { ValueOf } from '@/types/helpers';
import { OfferCard } from '@/types/offer';
import { RequestStatus, SortType } from '@/utils/consts';

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
    offerCards.toSorted((offerA, offerB) => offerB.price - offerA.price),
  [SortType.LOW_TO_HIGH]: (offerCards: OfferCard[]) =>
    offerCards.toSorted((offerA, offerB) => offerA.price - offerB.price),
  [SortType.TOP_RATED]: (offerCards: OfferCard[]) =>
    offerCards.toSorted((offerA, offerB) => offerB.rating - offerA.rating),
};

const sortOffers = (
  offerCards: OfferCard[],
  sortType: ValueOf<typeof SortType>
) => sortBy[sortType](offerCards);

const isRequestOK = (
  response: PayloadAction<unknown, string, { requestStatus: unknown }>
) => response.meta.requestStatus === RequestStatus.FULFILLED;

const sortComments = (comments: UserComment[]) =>
  comments.toSorted(
    (commentA, commentB) =>
      Number(new Date(commentB.date)) - Number(new Date(commentA.date))
  );

const showError = (error: unknown) => {
  if (isAxiosError(error)) {
    toast.error(error.message);
  }
};

const getEnding = (wordInOne: string, amount: number) =>
  amount === 1 ? wordInOne : `${wordInOne}s`;

export {
  capitalizeFirstLetter,
  convertRatingToStyle,
  getEnding,
  humanizeDate,
  isRequestOK,
  showError,
  sortComments,
  sortOffers
};
