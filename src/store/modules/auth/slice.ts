import { createSlice } from '@reduxjs/toolkit';

import { ValueOf } from '@/types/helpers';
import { UserWithAuth } from '@/types/user';
import { AuthStatus, FeatureModule } from '@/utils/consts';

import { requireAuthorization } from './actions';

const initialState: {
  authorizationStatus: ValueOf<typeof AuthStatus>;
  user: UserWithAuth | undefined;
} = {
  authorizationStatus: AuthStatus.Unknown,
  user: undefined,
};

const authSlice = createSlice({
  name: FeatureModule.AUTH,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.user = action.payload.userData;
    });
  },
});

export { authSlice };
