import PlaceCard from '@/components/common/place-card/place-card';
import { OfferCard } from '@/types/offer';

import { PlaceCardType } from '@/utils/consts';

const PLACES_CARD_STYLES = {
  cardType: PlaceCardType.NearPlaces,
  imageWidth: 260,
  imageHeight: 200
};

type OfferNearPlacesProps = Readonly<{
  places: OfferCard[];
}>

function OfferNearPlaces({ places }: OfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          places.map((place) => (
            <PlaceCard
              place={place}
              key={place.id}
              {...PLACES_CARD_STYLES}
            />
          ))
        }
      </div>
    </section>
  );
}

export default OfferNearPlaces;
