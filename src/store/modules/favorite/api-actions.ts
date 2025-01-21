import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { OfferCard, OfferFull } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute, FeatureModule } from '@/utils/consts';
import { showError } from '@/utils/helpers';

import { loadOffers } from '../cities/actions';
import { loadFavorites } from './actions';

const FavoriteStatus = {
  IS_FAVORITE: 1,
  NOT_FAVORITE: 0,
} as const;

const Action = {
  updateOfferFavoriteStatusAction: `${FeatureModule.FAVORITE}/updateOfferFavoriteStatusAction`,
  fetchFavoriteOffersAction: `${FeatureModule.FAVORITE}/fetchFavoriteOffersAction`,
} as const;

const updateOfferFavoriteStatusAction = createAsyncThunk<
  OfferCard[] | undefined,
  { offer: OfferCard | OfferFull; isFavorite: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  Action.updateOfferFavoriteStatusAction,
  async ({ offer, isFavorite }, { dispatch, extra: api }) => {
    const status = isFavorite
      ? FavoriteStatus.NOT_FAVORITE
      : FavoriteStatus.IS_FAVORITE;

    try {
      await api.post<OfferCard[]>(`${ApiRoute.FAVORITE}/${offer.id}/${status}`);

      const { data } = await api.get<OfferCard[]>(ApiRoute.OFFERS);

      dispatch(loadOffers(data));

      return data;
    } catch (error) {
      showError(error);
    }
  }
);

const fetchFavoriteOffersAction = createAsyncThunk<
  OfferCard[] | undefined,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.fetchFavoriteOffersAction, async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<OfferCard[]>(ApiRoute.FAVORITE);

    dispatch(loadFavorites(data));

    return data;
  } catch (error) {
    showError(error);
  }
});

export { fetchFavoriteOffersAction, updateOfferFavoriteStatusAction };
