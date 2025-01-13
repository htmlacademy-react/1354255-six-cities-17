import { createAction } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';

export const setCurrentCity = createAction<{
  currentCity: CityValue;
}>('SET_ACTIVE_CITY');

export const setOfferCards = createAction<{
  offerCards: OfferCard[];
}>('SET_OFFER_CARDS');
