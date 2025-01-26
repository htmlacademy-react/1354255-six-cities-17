import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { dropToken, saveToken } from '@/service/token';
import { AuthData } from '@/types/auth-data';
import { AppDispatch, State } from '@/types/store';
import { UserWithAuth } from '@/types/user';
import { ApiRoute, AuthStatus, FeatureModule } from '@/utils/consts';
import { showError } from '@/utils/helpers';

import { requireAuthorization } from './actions';

const Action = {
  checkAuth: `${FeatureModule.AUTH}/checkAuth`,
  login: `${FeatureModule.AUTH}/login`,
  logout: `${FeatureModule.AUTH}/logout`,
} as const;

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(Action.checkAuth, async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserWithAuth>(ApiRoute.LOGIN);

    dispatch(
      requireAuthorization({
        userData: data,
        authStatus: AuthStatus.Auth,
      })
    );
  } catch (error) {
    showError(error);

    dispatch(
      requireAuthorization({
        userData: undefined,
        authStatus: AuthStatus.NoAuth,
      })
    );
  }
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  Action.login,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const {
        data: { token },
      } = await api.post<UserWithAuth>(ApiRoute.LOGIN, { email, password });

      saveToken(token);

      const { data } = await api.get<UserWithAuth>(ApiRoute.LOGIN);

      dispatch(
        requireAuthorization({
          userData: data,
          authStatus: AuthStatus.Auth,
        })
      );
    } catch (error) {
      showError(error);
    }
  }
);

const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(Action.logout, async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.LOGOUT);

  dropToken();

  dispatch(
    requireAuthorization({
      userData: undefined,
      authStatus: AuthStatus.NoAuth,
    })
  );
});

export { checkAuthAction, loginAction, logoutAction };
