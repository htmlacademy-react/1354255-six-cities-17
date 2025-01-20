import { CityValue } from '@/types/city';
import { OfferCard } from '@/types/offer';

class OfferApiService {
  static getOffersInCity(offers: OfferCard[], city: CityValue): OfferCard[] {
    return offers.filter((offer) => offer.city.name === city);
  }
}

export default OfferApiService;
