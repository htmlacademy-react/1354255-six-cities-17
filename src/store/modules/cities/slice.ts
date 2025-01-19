import { createSlice } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

import { loadOffers } from './actions';

const initialState: {
  offerCards: OfferCard[];
} = {
  offerCards: [],
};

const citiesSlice = createSlice({
  name: FeatureModule.CITIES,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadOffers, (state, action) => {
      state.offerCards = action.payload;
    });
  },
});

export { citiesSlice };
