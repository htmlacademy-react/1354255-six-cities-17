import { createSlice } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

import { loadFavorites } from './actions';

const initialState: {
  favorites: OfferCard[];
} = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: FeatureModule.FAVORITE,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    });
  },
});

export { favoriteSlice };
