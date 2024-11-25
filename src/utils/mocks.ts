import { PlaceCard } from '@/types/place-card';

const PLACES: PlaceCard[] = [
  {
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    rating: 4
  },
  {
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    name: 'Wood and stone place',
    type: 'room',
    rating: 4
  },
  {
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    name: 'Canal View Prinsengracht',
    type: 'apartment',
    rating: 4
  },
  {
    isPremium: true,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    rating: 4.5
  },
  {
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    name: 'Wood and stone place',
    type: 'room',
    rating: 4
  },
];

export { PLACES };
