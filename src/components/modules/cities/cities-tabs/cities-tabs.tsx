import { clsx } from 'clsx';
import { memo, MouseEvent } from 'react';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { setCurrentCity } from '@/store/modules/common/actions';
import { getCurrentCity } from '@/store/modules/common/selectors';

import LocationItem from '@/components/common/location-item/location-item';

import { CityValue } from '@/types/city';
import { City } from '@/utils/consts';

function CitiesTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getCurrentCity);

  const handleTabClick = (city: CityValue) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(setCurrentCity(city));
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

export default memo(CitiesTabs);
