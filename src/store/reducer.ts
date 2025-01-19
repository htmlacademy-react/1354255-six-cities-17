import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '@/store/modules/auth/slice';
import { citiesSlice } from '@/store/modules/cities/slice';
import { commonSlice } from '@/store/modules/common/slice';
import { offerSlice } from '@/store/modules/offer/slice';
import { FeatureModule } from '@/utils/consts';

const reducer = combineReducers({
  [FeatureModule.AUTH]: authSlice.reducer,
  [FeatureModule.COMMON]: commonSlice.reducer,
  [FeatureModule.CITIES]: citiesSlice.reducer,
  [FeatureModule.OFFER]: offerSlice.reducer,
});

export { reducer };
