import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { CommentRequest, UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute, FeatureModule } from '@/utils/consts';

import { loadComments, loadNearbyOffer, loadOffer } from './actions';

const Action = {
  getOfferByID: `${FeatureModule.OFFER}/getOfferByID`,
  fetchNearbyOffers: `${FeatureModule.OFFER}/fetchNearbyOffers`,
  fetchOfferComments: `${FeatureModule.OFFER}/fetchOfferComments`,
  postOfferComments: `${FeatureModule.OFFER}/postOfferComments`,
} as const;

const getOfferByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.getOfferByID, async (id, { dispatch, extra: api }) => {
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
>(Action.fetchNearbyOffers, async (id, { dispatch, extra: api }) => {
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
>(Action.fetchOfferComments, async (id, { dispatch, extra: api }) => {
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
>(Action.postOfferComments, async ({ id, comment }, { extra: api }) => {
  const { data } = await api.post<UserComment[]>(`${ApiRoute.COMMENTS}/${id}`, {
    ...comment,
  });

  return data;
});

export {
  fetchNearbyOffers,
  fetchOfferComments,
  getOfferByID,
  postOfferComments
};
