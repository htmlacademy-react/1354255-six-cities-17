import PlaceCard from '@/components/common/place-card/place-card';

import { OfferCard } from '@/types/offer/offer';
import { PlaceCardType as PlaceCardTypeEnum } from '@/utils/consts';

const CITIES_CARD_STYLES = {
  cardType: PlaceCardTypeEnum.Cities,
  imageWidth: 260,
  imageHeight: 200
};

type CitiesPlacesListProp = Readonly<{
  places: OfferCard[];
}>

function CitiesPlacesList({ places }: CitiesPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        places.map((place) => (
          <PlaceCard
            place={place}
            key={place.id}
            {...CITIES_CARD_STYLES}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlacesList;
