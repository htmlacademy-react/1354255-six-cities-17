import { ValueOf } from '@/types/helpers';
import { createAction } from '@reduxjs/toolkit';

import { CityValue } from '@/types/city';
import { UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { UserWithAuth } from '@/types/user';
import { AuthStatus, SortType } from '@/utils/consts';

export const setCurrentCity = createAction<CityValue>('SET_CURRENT_CITY');

export const loadOffers = createAction<OfferCard[]>('LOAD_OFFER_CARDS');

export const setCurrentSort =
  createAction<ValueOf<typeof SortType>>('SET_CURRENT_SORT');

export const requireAuthorization = createAction<{
  userData: UserWithAuth | undefined;
  authStatus: ValueOf<typeof AuthStatus>;
}>('AUTH');

export const loadOffer = createAction<OfferFull>('LOAD_OFFER');

export const loadNearbyOffer = createAction<OfferCard[]>('LOAD_NEARBY_OFFER');

export const loadComments = createAction<UserComment[]>('LOAD_COMMENTS');
