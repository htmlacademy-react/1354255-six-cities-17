import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { dropToken, saveToken } from '@/service/token';
import { loadComments, loadNearbyOffer, loadOffer, loadOffers, requireAuthorization } from '@/store/actions';
import { AuthData } from '@/types/auth-data';
import { CommentRequest, UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { UserWithAuth } from '@/types/user';
import { ApiRoute, AuthStatus } from '@/utils/consts';

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_OFFERS', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCard[]>(ApiRoute.OFFERS);
  dispatch(loadOffers(data));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('CHECK_AUTH', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserWithAuth>(ApiRoute.LOGIN);

    dispatch(
      requireAuthorization({
        userData: data,
        authStatus: AuthStatus.Auth,
      })
    );
  } catch {
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
>('LOGIN', async ({ login: email, password }, { dispatch, extra: api }) => {
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
});

const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('LOGOUT', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.LOGOUT);
  dropToken();
  dispatch(
    requireAuthorization({
      userData: undefined,
      authStatus: AuthStatus.NoAuth,
    })
  );
});

const getOfferByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('GET_OFFER', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferFull>(`${ApiRoute.OFFERS}/${id}`);

  dispatch(loadOffer(data));
});

const fetchNearbyOffers = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_NEARBY_OFFERS', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferCard[]>(
    `${ApiRoute.OFFERS}/${id}/nearby`
  );

  dispatch(loadNearbyOffer(data));
});

const fetchOfferComments = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_COMMENTS', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<UserComment[]>(`${ApiRoute.COMMENTS}/${id}`);

  dispatch(loadComments(data));
});

const postOfferComments = createAsyncThunk<
  UserComment[],
  CommentRequest,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('POST_COMMENTS', async ({ id, comment }, { extra: api }) => {
  const { data } = await api.post<UserComment[]>(`${ApiRoute.COMMENTS}/${id}`, { ...comment});

  return data;
});

export {
  checkAuthAction,
  fetchNearbyOffers,
  fetchOfferComments,
  fetchOffersAction,
  getOfferByID,
  loginAction,
  logoutAction,
  postOfferComments
};
