import { setOfferCards, setCurrentCity } from './actions';
import { OfferCard } from '@/types/offer';
import { CityValue } from '@/types/city';
import { createReducer } from '@reduxjs/toolkit';

import { City } from '@/utils/consts';

const initialState: {
  currentCity: CityValue;
  offerCards: OfferCard[];
} = {
  currentCity: City.Paris,
  offerCards: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferCards, (state, action) => {
      state.offerCards = action.payload;
    })
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    });
});
