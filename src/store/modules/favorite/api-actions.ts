import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { OfferCard, OfferFull } from '@/types/offer';
import { AppDispatch, State } from '@/types/store';
import { ApiRoute, FeatureModule } from '@/utils/consts';

import { loadOffers } from '../cities/actions';

const FavoriteStatus = {
  IS_FAVORITE: 1,
  NOT_FAVORITE: 0,
} as const;

const Action = {
  updateOfferFavoriteStatusAction: `${FeatureModule.FAVORITE}/updateOfferFavoriteStatusAction`,
} as const;

const updateOfferFavoriteStatusAction = createAsyncThunk<
  OfferCard[],
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

    await api.post<OfferCard[]>(`${ApiRoute.FAVORITE}/${offer.id}/${status}`);

    const { data } = await api.get<OfferCard[]>(ApiRoute.OFFERS);

    dispatch(loadOffers(data));

    return data;
  }
);

export { updateOfferFavoriteStatusAction };
