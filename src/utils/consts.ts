import ActivePin from '@/assets/icons/pin-active.svg';
import DefaultPin from '@/assets/icons/pin.svg';

const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '*',
} as const;

const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const BookmarkType = {
  PlaceCard: 'place-card',
  Offer: 'offer',
} as const;

const PlaceCardType = {
  Cities: 'cities',
  Favorites: 'favorites',
  NearPlaces: 'near-places',
} as const;

const MapType = {
  Cities: 'cities',
  Offer: 'offer',
} as const;

const RatingType = {
  PlaceCard: 'place-card',
  Reviews: 'reviews',
  Offer: 'offer',
} as const;

const ApiEndpoint = {
  OFFERS: 'offers',
  FAVORITE: 'favorite',
  COMMENTS: 'comments',
  LOGIN: 'login',
  LOGOUT: 'logout',
} as const;

const Leaflet = {
  URL_TEMPLATE:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
} as const;

const UrlMarker = {
  DEFAULT: DefaultPin,
  CURRENT: ActivePin,
} as const;

const SortType = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
} as const;

const ApiRoute = {
  OFFERS: '/offers',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
  LOGIN: '/login',
} as const;

export {
  ApiEndpoint,
  ApiRoute,
  AppRoute,
  AuthStatus,
  BookmarkType,
  City,
  Leaflet,
  MapType,
  PlaceCardType,
  RatingType,
  SortType,
  UrlMarker
};
