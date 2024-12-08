const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
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
  Offer: 'offer'
} as const;

const PlaceCardType = {
  Cities: 'cities',
  Favorites: 'favorites',
  NearPlaces: 'near-places'
} as const;

const MapType = {
  Cities: 'cities',
  Offer: 'offer'
} as const;

const RatingType = {
  PlaceCard: 'place-card',
  Reviews: 'reviews',
  Offer: 'offer'
} as const;

const ApiEndpoint = {
  OFFERS: 'offers',
  FAVORITE: 'favorite',
  COMMENTS: 'comments',
  LOGIN: 'login',
  LOGOUT: 'logout'
} as const;

export {
  ApiEndpoint,
  AppRoute,
  AuthStatus,
  BookmarkType,
  City,
  MapType,
  PlaceCardType,
  RatingType
};
