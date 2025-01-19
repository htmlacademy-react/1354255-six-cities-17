import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getOffer = (state: State) => state[FeatureModule.OFFER].offer;

const getNearPlaces = (state: State) => state[FeatureModule.OFFER].offersNearby;

const getReviews = (state: State) => state[FeatureModule.OFFER].reviews;

export { getNearPlaces, getOffer, getReviews };
