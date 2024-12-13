import { clsx } from 'clsx';
import { Helmet } from 'react-helmet-async';

import Header from '@/components/common/header/header';
import MapSection from '@/components/common/map-section/map-section';
import CitiesPlacesEmpty from '~/cities/cities-places-empty/cities-places-empty';
import CitiesPlaces from '~/cities/cities-places/cities-places';
import CitiesTabs from '~/cities/cities-tabs/cities-tabs';

import useSelectedPoint from '@/hooks/useSelectedPoint';
import offerApiService from '@/service/offer-api-service';
import { ValueOf } from '@/types/helpers';
import { AuthStatus, City, MapType } from '@/utils/consts';

type MainPageProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>

function MainPage({ authStatus }: MainPageProps): JSX.Element {
  const places = offerApiService.offers;
  const hasPlaces = !!places.length;

  const { selectedPointId, handleSelectedPointState } = useSelectedPoint();

  return (
    <div className={clsx(
      'page',
      'page--gray',
      'page--main',
      !hasPlaces && 'page__main--index-empty'
    )}
    >
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs selectedCity={City.Paris} />

        <div className="cities">
          <div className={clsx(
            'cities__places-container',
            'container',
            !hasPlaces && 'cities__places-container--empty'
          )}
          >
            {
              hasPlaces
                ?
                <CitiesPlaces
                  places={places}
                  onMouseOver={handleSelectedPointState}
                  onMouseLeave={handleSelectedPointState}
                />
                : <CitiesPlacesEmpty />
            }

            <div className="cities__right-section">
              {
                hasPlaces &&
                <MapSection
                  type={MapType.Cities}
                  offers={places}
                  selectedOfferId={selectedPointId}
                />
              }
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default MainPage;
