import PlaceCard from '@/components/common/place-card/place-card';

import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer';
import { PlaceCardType } from '@/utils/consts';

const PLACES_CARD_STYLES = {
  cardType: PlaceCardType.NearPlaces,
  imageWidth: 260,
  imageHeight: 200
};

type OfferNearPlacesProps = Readonly<{
  places: OfferCard[];
  onMouseOver?: (id: ID) => void;
  onMouseLeave?: () => void;
}>

function OfferNearPlaces({
  places,
  onMouseOver,
  onMouseLeave
}: OfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          places.map((place) => (
            <PlaceCard
              place={place}
              key={place.id}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              {...PLACES_CARD_STYLES}
            />
          ))
        }
      </div>
    </section>
  );
}

export default OfferNearPlaces;
