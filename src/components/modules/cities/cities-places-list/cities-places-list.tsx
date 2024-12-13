import PlaceCard from '@/components/common/place-card/place-card';

import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer/offer';
import { PlaceCardType as PlaceCardTypeEnum } from '@/utils/consts';

const CITIES_CARD_STYLES = {
  cardType: PlaceCardTypeEnum.Cities,
  imageWidth: 260,
  imageHeight: 200
};

type CitiesPlacesListProp = Readonly<{
  places: OfferCard[];
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
}>

function CitiesPlacesList({
  places,
  onMouseOver,
  onMouseLeave
}: CitiesPlacesListProp): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        places.map((place) => (
          <PlaceCard
            place={place}
            key={place.id}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            {...CITIES_CARD_STYLES}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlacesList;
