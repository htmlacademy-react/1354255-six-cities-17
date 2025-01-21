import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { CommentRequest, UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute, FeatureModule } from '@/utils/consts';
import { showError } from '@/utils/helpers';

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
  try {
    const { data } = await api.get<OfferFull>(`${ApiRoute.OFFERS}/${id}`);

    dispatch(loadOffer(data));
  } catch (error) {
    showError(error);
  }
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
  try {
    const { data } = await api.get<OfferCard[]>(
      `${ApiRoute.OFFERS}/${id}/nearby`
    );

    dispatch(loadNearbyOffer(data));
  } catch (error) {
    showError(error);
  }
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
  try {
    const { data } = await api.get<UserComment[]>(`${ApiRoute.COMMENTS}/${id}`);

    dispatch(loadComments(data));
  } catch (error) {
    showError(error);
  }
});

const postOfferComments = createAsyncThunk<
  UserComment[] | undefined,
  CommentRequest,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.postOfferComments, async ({ id, comment }, { extra: api }) => {
  try {
    const { data } = await api.post<UserComment[]>(
      `${ApiRoute.COMMENTS}/${id}`,
      {
        ...comment,
      }
    );

    return data;
  } catch (error) {
    showError(error);
  }
});

export {
  fetchNearbyOffers,
  fetchOfferComments,
  getOfferByID,
  postOfferComments
};
