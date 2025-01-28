import { clsx } from 'clsx';
import { memo, MouseEvent } from 'react';

import { useAppDispatch } from '@/hooks/store/use-app-dispatch';
import { useAppSelector } from '@/hooks/store/use-app-selector';
import {
  getCurrentCity,
  resetSort,
  setCurrentCity,
} from '@/store/modules/cities';

import LocationItem from '@/components/common/location-item/location-item';

import { CityValue } from '@/types/city';
import { City } from '@/utils/consts';

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getCurrentCity);

  const handleTabClick =
    (city: CityValue) => (evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();

      dispatch(setCurrentCity(city));
      dispatch(resetSort());
    };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(City).map((tab) => {
            const isActive = tab === selectedCity;

            return (
              <LocationItem
                as="li"
                cityName={tab}
                linkClasses={clsx(
                  'tabs__item',
                  isActive && 'tabs__item--active'
                )}
                key={tab}
                onClick={handleTabClick(tab)}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export const CitiesTabs = memo(Tabs);
