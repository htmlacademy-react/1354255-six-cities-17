import {
  MOCK_OFFERS,
  MOCK_OFFERS_BY_ID,
  MOCK_OFFERS_NEARBY
} from '@/mocks/offers';
import { ID } from '@/types/id';
import { OfferFull } from '@/types/offer';

class OfferApiService {
  get offers() {
    return MOCK_OFFERS;
  }

  getOfferById(id: ID): OfferFull | undefined {
    return MOCK_OFFERS_BY_ID[id];
  }

  getOffersNearBy(id: ID) {
    return MOCK_OFFERS_NEARBY[id];
  }
}

export default new OfferApiService();
