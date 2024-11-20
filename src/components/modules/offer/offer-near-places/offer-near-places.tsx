import PlaceCard from '@/components/common/place-card/place-card';

import { PLACES } from '@/utils/mocks';

const PLACES_CARD_STYLES = {
  cardWrapperClass: 'near-places__card',
  imageWrapperClass: 'near-places__image-wrapper',
  imageWidth: 260,
  imageHeight: 200
};

function OfferNearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          PLACES.slice(0, 3).map((place) => (
            <PlaceCard
              place={place}
              key={place.imageSrc}
              {...PLACES_CARD_STYLES}
            />
          ))
        }
      </div>
    </section>
  );
}

export default OfferNearPlaces;
