import PlaceCard from '@/components/common/place-card/place-card';

import { PlaceCard as PlaceCardType } from '@/types/place-card';
import { City } from '@/utils/consts';

const FAVORITES_CARD_STYLES = {
  cardWrapperClass: 'favorites__card',
  imageWrapperClass: 'favorites__image-wrapper',
  imageWidth: 150,
  imageHeight: 110
};

type FavoritesListProps = Readonly<{
  places: Partial<Record<keyof typeof City, PlaceCardType[]>>;
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
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
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
