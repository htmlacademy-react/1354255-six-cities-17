import { ValueOf } from '@/types/helpers';
import { SortType } from '@/utils/consts';
import { createAction } from '@reduxjs/toolkit';

import { CityValue } from '@/types/city';
import { OfferCard } from '@/types/offer';

export const setCurrentCity = createAction<CityValue>('SET_CURRENT_CITY');

export const loadOffers = createAction<OfferCard[]>('LOAD_OFFER_CARDS');

export const setCurrentSort = createAction<ValueOf<typeof SortType>>('SET_CURRENT_SORT');
