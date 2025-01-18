import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getCurrentCity = (state: State) =>
  state[FeatureModule.COMMON].currentCity;

const getCurrentSort = (state: State) =>
  state[FeatureModule.COMMON].currentSort;

export { getCurrentCity, getCurrentSort };
