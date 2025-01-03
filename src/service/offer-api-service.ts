import {
  MOCK_OFFERS,
  MOCK_OFFERS_BY_ID,
  MOCK_OFFERS_NEARBY
} from '@/mocks/offers';
import { ID } from '@/types/id';
import { OfferFull } from '@/types/offer';

class OfferApiService {
  readonly #NEAR_PLACES_TO_SHOW = 3;

  get offers() {
    return MOCK_OFFERS;
  }

  getOfferById(id: ID): OfferFull | undefined {
    return MOCK_OFFERS_BY_ID[id];
  }

  getOffersNearBy(id: ID) {
    return MOCK_OFFERS_NEARBY[id].slice(0, this.#NEAR_PLACES_TO_SHOW);
  }
}

export default new OfferApiService();
