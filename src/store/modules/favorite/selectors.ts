import { State } from '@/types/store';
import { FeatureModule } from '@/utils/consts';

const getFavorites = (state: State) => state[FeatureModule.CITIES].offerCards.filter((card) => card.isFavorite);

const getAllFavorites = (state: State) =>
  state[FeatureModule.FAVORITE].favorites;

export { getAllFavorites, getFavorites };
