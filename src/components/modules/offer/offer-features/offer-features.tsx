import { OfferHousing } from '@/types/offer';
import { capitalizeFirstLetter } from '@/utils/helpers';

type OfferFeaturesProps = Readonly<{
  type: OfferHousing;
  bedroomsCount: number;
  maxAdults: number;
}>;

function OfferFeatures({ type, bedroomsCount, maxAdults }: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedroomsCount} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default OfferFeatures;
