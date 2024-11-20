type PlaceCard = {
  isPremium: boolean;
  imageSrc: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  name: string;
  type: 'room' | 'apartment' | 'house' | 'hotel';
}

export type { PlaceCard };
