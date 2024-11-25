import CitiesPlacesList from '~/cities/cities-places-list/cities-places-list';
import CitiesPlacesSorting from '~/cities/cities-places-sorting/cities-places-sorting';

import { PlaceCard } from '@/types/place-card';

type CitiesPlacesProps = Readonly<{
  places: PlaceCard[];
}>

function CitiesPlaces({ places }: CitiesPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>

      <CitiesPlacesSorting />
      <CitiesPlacesList places={places} />
    </section>
  );
}

export default CitiesPlaces;
