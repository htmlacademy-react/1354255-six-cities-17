import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { loadOffers } from '@/store/actions';
import { OfferCard } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute } from '@/utils/consts';

export const fetchOffersAction = createAsyncThunk<
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
