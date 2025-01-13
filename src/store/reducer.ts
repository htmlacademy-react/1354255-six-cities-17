import { ValueOf } from '@/types/helpers';
import { setOfferCards, setCurrentCity, setCurrentSort } from './actions';
import { OfferCard } from '@/types/offer';
import { CityValue } from '@/types/city';
import { createReducer } from '@reduxjs/toolkit';

import { City, SortType } from '@/utils/consts';

const initialState: {
  currentCity: CityValue;
  offerCards: OfferCard[];
  currentSort: ValueOf<typeof SortType>;
} = {
  currentCity: City.Paris,
  offerCards: [],
  currentSort: SortType.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferCards, (state, action) => {
      state.offerCards = action.payload;
    })
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
