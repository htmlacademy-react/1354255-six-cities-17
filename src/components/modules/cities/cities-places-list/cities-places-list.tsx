import PlaceCard from '@/components/common/place-card/place-card';

import { useAppSelector } from '@/hooks/store/useAppSelector';
import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer/offer';
import { PlaceCardType as PlaceCardTypeEnum } from '@/utils/consts';
import { sortOffers } from '@/utils/helpers';

const CITIES_CARD_STYLES = {
  cardType: PlaceCardTypeEnum.Cities,
  imageWidth: 260,
  imageHeight: 200,
};

type CitiesPlacesListProp = Readonly<{
  places: OfferCard[];
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
}>;

function CitiesPlacesList({
  places,
  onMouseOver,
  onMouseLeave,
}: CitiesPlacesListProp): JSX.Element {
  const currentSort = useAppSelector((state) => state.currentSort);
  const offersSorted = sortOffers(places, currentSort);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersSorted.map((place) => (
        <PlaceCard
          place={place}
          key={place.id}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          {...CITIES_CARD_STYLES}
        />
      ))}
    </div>
  );
}

export default CitiesPlacesList;
