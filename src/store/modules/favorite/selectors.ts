import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getFavorites = (state: State) => state[FeatureModule.CITIES].offerCards.filter((card) => card.isFavorite);

export { getFavorites };
