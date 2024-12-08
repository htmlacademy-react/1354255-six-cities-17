import { ID } from '@/types/id';
import { OfferCity, OfferLocation } from '@/types/offer';
import { User } from '@/types/user';

type OfferHousing = 'room' | 'apartment' | 'house' | 'hotel';

type BaseOffer = {
  id: ID;
  title: string;
  type: OfferHousing;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

type OfferCard = BaseOffer & {
  previewImage: string;
}

type OfferFull = BaseOffer & {
  description: string;
  images: string[];
  goods: string[];
  host: User;
  bedrooms: number;
  maxAdults: number;
}

export type { OfferCard, OfferFull, OfferHousing };
