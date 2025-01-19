import { createSlice } from '@reduxjs/toolkit';

import { UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

import { loadComments, loadNearbyOffer, loadOffer } from './actions';

const initialState: {
  offer: OfferFull | null;
  offersNearby: OfferCard[];
  reviews: UserComment[];
} = {
  offer: null,
  offersNearby: [],
  reviews: [],
};

const offerSlice = createSlice({
  name: FeatureModule.OFFER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadNearbyOffer, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(loadComments, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export { offerSlice };
