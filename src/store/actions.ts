import { createAction } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { CityValue } from '@/types/city';

export const setCurrentCity = createAction<CityValue>('SET_ACTIVE_CITY');

export const setOfferCards = createAction<OfferCard[]>('SET_OFFER_CARDS');
