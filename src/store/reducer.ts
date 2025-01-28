import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '@/store/modules/auth';
import { citiesSlice } from '@/store/modules/cities';
import { favoriteSlice } from '@/store/modules/favorite';
import { offerSlice } from '@/store/modules/offer';

import { FeatureModule } from '@/utils/consts';

const reducer = combineReducers({
  [FeatureModule.AUTH]: authSlice.reducer,
  [FeatureModule.CITIES]: citiesSlice.reducer,
  [FeatureModule.OFFER]: offerSlice.reducer,
  [FeatureModule.FAVORITE]: favoriteSlice.reducer,
});

export { reducer };
