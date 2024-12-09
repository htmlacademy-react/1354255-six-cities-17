import CitiesPlacesList from '~/cities/cities-places-list/cities-places-list';
import CitiesPlacesSorting from '~/cities/cities-places-sorting/cities-places-sorting';

import { OfferCard } from '@/types/offer';

type CitiesPlacesProps = Readonly<{
  places: OfferCard[];
}>

function CitiesPlaces({ places }: CitiesPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places.length} places to stay in Amsterdam</b>

      <CitiesPlacesSorting />
      <CitiesPlacesList places={places} />
    </section>
  );
}

export default CitiesPlaces;
