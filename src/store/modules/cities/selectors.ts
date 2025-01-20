import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getPlaces = (state: State) => state[FeatureModule.CITIES].offerCards;

const getCurrentCity = (state: State) =>
  state[FeatureModule.CITIES].currentCity;

const getCurrentSort = (state: State) =>
  state[FeatureModule.CITIES].currentSort;

export { getCurrentCity, getCurrentSort, getPlaces };
