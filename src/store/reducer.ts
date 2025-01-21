import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '@/store/modules/auth/slice';
import { citiesSlice } from '@/store/modules/cities/slice';
import { favoriteSlice } from '@/store/modules/favorite/slice';
import { offerSlice } from '@/store/modules/offer/slice';
import { FeatureModule } from '@/utils/consts';

const reducer = combineReducers({
  [FeatureModule.AUTH]: authSlice.reducer,
  [FeatureModule.CITIES]: citiesSlice.reducer,
  [FeatureModule.OFFER]: offerSlice.reducer,
  [FeatureModule.FAVORITE]: favoriteSlice.reducer,
});

export { reducer };
