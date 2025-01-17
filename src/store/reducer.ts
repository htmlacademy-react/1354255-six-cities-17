import { createReducer } from '@reduxjs/toolkit';

import {
  loadComments,
  loadNearbyOffer,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setCurrentCity,
  setCurrentSort,
} from './actions';

import { CityValue } from '@/types/city';
import { UserComment } from '@/types/comment';
import { ValueOf } from '@/types/helpers';
import { OfferCard, OfferFull } from '@/types/offer';
import { UserWithAuth } from '@/types/user';
import { AuthStatus, City, SortType } from '@/utils/consts';

const initialState: {
  currentCity: CityValue;
  offerCards: OfferCard[];
  currentSort: ValueOf<typeof SortType>;
  authorizationStatus: ValueOf<typeof AuthStatus>;
  user: UserWithAuth | undefined;
  offer: OfferFull | null;
  offersNearby: OfferCard[];
  reviews: UserComment[];
} = {
  currentCity: City.Paris,
  offerCards: [],
  currentSort: SortType.POPULAR,
  authorizationStatus: AuthStatus.Unknown,
  user: undefined,
  offer: null,
  offersNearby: [],
  reviews: []
};

export const reducer = createReducer(initialState, (builder) => {
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.user = action.payload.userData;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffer, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    });
});
