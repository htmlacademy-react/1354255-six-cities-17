import PlaceCard from '@/components/common/place-card/place-card';

import { PlaceCard as PlaceCardType } from '@/types/place-card';

const CITIES_CARD_STYLES = {
  cardWrapperClass: 'cities__card',
  imageWrapperClass: 'cities__image-wrapper',
  imageWidth: 260,
  imageHeight: 200
};

type CitiesPlacesListProp = Readonly<{
  places: PlaceCardType[];
}>

function CitiesPlacesList({ places }: CitiesPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        places.map((place) => (
          <PlaceCard
            place={place}
            key={place.name}
            {...CITIES_CARD_STYLES}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlacesList;
