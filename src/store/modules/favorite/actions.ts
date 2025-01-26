import { createAction } from '@reduxjs/toolkit';

import { OfferCard } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

const Action = {
  loadFavorites: `${FeatureModule.FAVORITE}/loadFavorites`,
} as const;

const loadFavorites = createAction<OfferCard[]>(Action.loadFavorites);

export { loadFavorites };
