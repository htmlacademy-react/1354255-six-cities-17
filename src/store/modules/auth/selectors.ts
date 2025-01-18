import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getAuthStatus = (state: State) => state[FeatureModule.AUTH].authorizationStatus;

export { getAuthStatus };
