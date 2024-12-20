import CitiesPlacesList from '~/cities/cities-places-list/cities-places-list';
import CitiesPlacesSorting from '~/cities/cities-places-sorting/cities-places-sorting';

import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer';

type CitiesPlacesProps = Readonly<{
  places: OfferCard[];
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
}>

function CitiesPlaces({
  places,
  onMouseOver,
  onMouseLeave,
}: CitiesPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places.length} places to stay in Amsterdam</b>

      <CitiesPlacesSorting />
      <CitiesPlacesList
        places={places}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
    </section>
  );
}

export default CitiesPlaces;
