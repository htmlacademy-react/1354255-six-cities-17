import { createSlice } from '@reduxjs/toolkit';

import { CityValue } from '@/types/city';
import { ValueOf } from '@/types/helpers';
import { City, FeatureModule, SortType } from '@/utils/consts';

import { setCurrentCity, setCurrentSort } from './actions';

const initialState: {
  currentCity: CityValue;
  currentSort: ValueOf<typeof SortType>;
} = {
  currentCity: City.Paris,
  currentSort: SortType.POPULAR,
};

const commonSlice = createSlice({
  name: FeatureModule.COMMON,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setCurrentCity, (state, action) => {
        state.currentCity = action.payload;
      })
      .addCase(setCurrentSort, (state, action) => {
        state.currentSort = action.payload;
      });
  },
});

export { commonSlice };
