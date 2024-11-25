import { Helmet } from 'react-helmet-async';

import Footer from '@/components/common/footer/footer';
import Header from '@/components/common/header/header';
import FavoritesEmpty from '~/favorites/favorites-empty/favorites-empty';
import FavoritesList from '~/favorites/favorites-list/favorites-list';

import { ValueOf } from '@/types/helpers';
import { PlaceCard } from '@/types/place-card';
import { AuthStatus, City } from '@/utils/consts';

const PLACES: Partial<Record<keyof typeof City, PlaceCard[]>> = {
  [City.Amsterdam]: [
    {
      isPremium: true,
      imageSrc: 'img/apartment-03.jpg',
      price: 180,
      isFavorite: true,
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
  ],
  [City.Cologne]: [
    {
      isPremium: false,
      imageSrc: 'img/apartment-small-04.jpg',
      price: 180,
      isFavorite: true,
      name: 'White castle',
      type: 'apartment',
      rating: 5
    },
  ]
};

type FavoritesPageProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>

function FavoritesPage({ authStatus }: FavoritesPageProps): JSX.Element {
  const hasPlaces = !!Object.keys(PLACES);

  return (
    <div className={`page ${!hasPlaces && 'page--favorites-empty'}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className={`page__main page__main--favorites ${!hasPlaces && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            hasPlaces
              ? <FavoritesList places={PLACES} />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;
