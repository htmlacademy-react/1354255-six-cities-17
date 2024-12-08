import { MOCK_OFFERS_FAVORITES } from '@/mocks/offers';

class FavoriteApiService {
  get favorite() {
    return MOCK_OFFERS_FAVORITES;
  }
}

export default new FavoriteApiService();
