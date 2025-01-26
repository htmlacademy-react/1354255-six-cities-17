import { useAppSelector } from '@/hooks/store/useAppSelector';
import { getCurrentCity } from '@/store/modules/cities/selectors';

import CitiesPlacesList from '~/cities/cities-places-list/cities-places-list';
import CitiesPlacesSorting from '~/cities/cities-places-sorting/cities-places-sorting';

import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer';

const getEnding = (length: number) => length === 1 ? 'place' : 'places';

type CitiesPlacesProps = Readonly<{
  places: OfferCard[];
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
}>;

function CitiesPlaces({
  places,
  onMouseOver,
  onMouseLeave,
}: CitiesPlacesProps): JSX.Element {
  const selectedCity = useAppSelector(getCurrentCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {places.length} {getEnding(places.length)} to stay in {selectedCity}
      </b>

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
