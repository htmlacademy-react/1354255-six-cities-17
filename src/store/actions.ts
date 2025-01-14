import { SortType } from '@/utils/consts';
import { ValueOf } from '@/types/helpers';
import { createAction } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { CityValue } from '@/types/city';

export const setCurrentCity = createAction<CityValue>('SET_CURRENT_CITY');

export const setOfferCards = createAction<OfferCard[]>('SET_OFFER_CARDS');

export const setCurrentSort = createAction<ValueOf<typeof SortType>>('SET_CURRENT_SORT');
