import { createAction } from '@reduxjs/toolkit';

import { UserComment } from '@/types/comment';
import { OfferCard, OfferFull } from '@/types/offer';
import { FeatureModule } from '@/utils/consts';

const Action = {
  loadOffer: `${FeatureModule.OFFER}/loadOffer`,
  loadNearbyOffer: `${FeatureModule.OFFER}/loadNearbyOffer`,
  loadComments: `${FeatureModule.OFFER}/loadComments`,
} as const;

const loadOffer = createAction<OfferFull>(Action.loadOffer);

const loadNearbyOffer = createAction<OfferCard[]>(Action.loadNearbyOffer);

const loadComments = createAction<UserComment[]>(Action.loadComments);

export { loadComments, loadNearbyOffer, loadOffer };
