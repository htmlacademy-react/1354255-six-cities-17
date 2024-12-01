import LocationItem from '@/components/common/location-item/location-item';
import PlaceCard from '@/components/common/place-card/place-card';

import { ValueOf } from '@/types/helpers';
import { PlaceCard as PlaceCardType } from '@/types/place-card';
import { City, PlaceCardType as PlaceCardTypeEnum } from '@/utils/consts';

const FAVORITES_CARD_STYLES = {
  cardType: PlaceCardTypeEnum.Favorites,
  imageWidth: 150,
  imageHeight: 110
};

type FavoritesListProps = Readonly<{
  places: Partial<Record<ValueOf<typeof City>, PlaceCardType[]>>;
}>

function FavoritesList({ places }: FavoritesListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {
          Object.entries(places).map(([city, placesByCity]) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <LocationItem cityName={city as ValueOf<typeof City>} />
              </div>

              <div className="favorites__places">
                {
                  placesByCity.map((place) => (
                    <PlaceCard
                      place={place}
                      key={place.name}
                      {...FAVORITES_CARD_STYLES}
                    />
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
