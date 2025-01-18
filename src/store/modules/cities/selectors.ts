import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getPlaces = (state: State) => state[FeatureModule.CITIES].offerCards;

export { getPlaces };
