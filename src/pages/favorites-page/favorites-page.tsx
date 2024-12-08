import { clsx } from 'clsx';
import { Helmet } from 'react-helmet-async';

import Footer from '@/components/common/footer/footer';
import Header from '@/components/common/header/header';
import FavoritesEmpty from '~/favorites/favorites-empty/favorites-empty';
import FavoritesList from '~/favorites/favorites-list/favorites-list';

import favoriteApiService from '@/service/favorite-api-service';
import { ValueOf } from '@/types/helpers';
import { AuthStatus } from '@/utils/consts';

type FavoritesPageProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>

function FavoritesPage({ authStatus }: FavoritesPageProps): JSX.Element {
  const places = favoriteApiService.favorite;
  const hasPlaces = !!places.length;

  return (
    <div className={clsx('page', !hasPlaces && 'page--favorites-empty')}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className={clsx(
        'page__main',
        'page__main--favorites',
        !hasPlaces && 'page__main--favorites-empty'
      )}
      >
        <div className="page__favorites-container container">
          {
            hasPlaces
              ? <FavoritesList places={places} />
              : <FavoritesEmpty />
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesPage;
