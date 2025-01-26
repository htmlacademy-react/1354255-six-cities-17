import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { fetchFavoriteOffersAction } from '@/store/modules/favorite/api-actions';

import LocationItem from '@/components/common/location-item/location-item';
import PlaceCard from '@/components/common/place-card/place-card';

import { CityValue } from '@/types/city';
import { OfferCard } from '@/types/offer';
import { PlaceCardType } from '@/utils/consts';

const FAVORITES_CARD_STYLES = {
  cardType: PlaceCardType.Favorites,
  imageWidth: 150,
  imageHeight: 110,
};

type FavoritesListProps = Readonly<{
  places: OfferCard[];
}>;

function FavoritesList({ places }: FavoritesListProps): JSX.Element {
  const groupedPlaces = Object.groupBy<OfferCard, CityValue>(
    places,
    ({ city }) => city.name
  );
  const dispatch = useAppDispatch();

  const handleInfoUpdate = async () => await dispatch(fetchFavoriteOffersAction());

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {Object.entries(groupedPlaces).map(([city, placesByCity]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <LocationItem cityName={city as CityValue} />
            </div>

            <div className="favorites__places">
              {placesByCity.map((place) => (
                <PlaceCard
                  place={place}
                  key={place.id}
                  onUpdateInfo={handleInfoUpdate}
                  {...FAVORITES_CARD_STYLES}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesList;
