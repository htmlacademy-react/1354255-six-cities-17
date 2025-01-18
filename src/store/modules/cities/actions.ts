import { createAction } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

const Action = {
  loadOffers: `${FeatureModule.CITIES}/loadOffers`,
} as const;

const loadOffers = createAction<OfferCard[]>(Action.loadOffers);

export { loadOffers };
