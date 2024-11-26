import { clsx } from 'clsx';

import LocationItem from '@/components/common/location-item/location-item';

import { ValueOf } from '@/types/helpers';
import { City } from '@/utils/consts';

type CitiesTabsProps = Readonly<{
  selectedCity: ValueOf<typeof City>;
}>

function CitiesTabs({ selectedCity }: CitiesTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(City).map((tab) => {
              const isActive = tab === selectedCity;

              return (
                <LocationItem
                  as='li'
                  cityName={tab}
                  linkClasses={clsx(['tabs__item', isActive && 'tabs__item--active'])}
                  key={tab}
                />
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
