import { Helmet } from 'react-helmet-async';

import Header from '@/components/common/header/header';
import CitiesMap from '~/cities/cities-map/cities-map';
import CitiesPlacesEmpty from '~/cities/cities-places-empty/cities-places-empty';
import CitiesPlaces from '~/cities/cities-places/cities-places';
import CitiesTabs from '~/cities/cities-tabs/cities-tabs';

import { ValueOf } from '@/types/helpers';
import { PlaceCard } from '@/types/place-card';
import { AuthStatus, City } from '@/utils/consts';

type MainPageProps = Readonly<{
  places: PlaceCard[];
  authStatus: ValueOf<typeof AuthStatus>;
}>

function MainPage({ places, authStatus }: MainPageProps): JSX.Element {
  const hasPlaces = !!places.length;

  return (
    <div className={`page page--gray page--main ${!hasPlaces && 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs selectedCity={City.Paris} />

        <div className="cities">
          <div className={`cities__places-container container ${!hasPlaces && 'cities__places-container--empty'}`}>
            {
              hasPlaces
                ? <CitiesPlaces places={places} />
                : <CitiesPlacesEmpty />
            }

            <div className="cities__right-section">
              {hasPlaces && <CitiesMap />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default MainPage;
