import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { OfferCard } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute, FeatureModule } from '@/utils/consts';

import { showError } from '@/utils/helpers';
import { loadOffers } from './actions';

const Action = {
  fetchOffers: `${FeatureModule.CITIES}/fetchOffers`,
} as const;

const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.fetchOffers, async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<OfferCard[]>(ApiRoute.OFFERS);

    dispatch(loadOffers(data));
  } catch (error) {
    showError(error);
  }
});

export { fetchOffersAction };
