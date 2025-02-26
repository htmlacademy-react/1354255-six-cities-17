import { createSlice } from '@reduxjs/toolkit';

import { CityValue } from '@/types/city';
import { ValueOf } from '@/types/helpers';
import { OfferCard } from '@/types/offer';
import { City, FeatureModule, SortType } from '@/utils/consts';

import {
  loadOffers,
  resetSort,
  setCurrentCity,
  setCurrentSort,
} from './actions';

const initialState: {
  offerCards: OfferCard[];
  currentCity: CityValue;
  currentSort: ValueOf<typeof SortType>;
} = {
  offerCards: [],
  currentCity: City.Paris,
  currentSort: SortType.POPULAR,
};

const citiesSlice = createSlice({
  name: FeatureModule.CITIES,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers, (state, action) => {
        state.offerCards = action.payload;
      })
      .addCase(setCurrentCity, (state, action) => {
        state.currentCity = action.payload;
      })
      .addCase(setCurrentSort, (state, action) => {
        state.currentSort = action.payload;
      })
      .addCase(resetSort, (state) => {
        state.currentSort = SortType.POPULAR;
      });
  },
});

export { citiesSlice };
