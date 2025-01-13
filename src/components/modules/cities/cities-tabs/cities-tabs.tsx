import { clsx } from 'clsx';
import { MouseEvent } from 'react';

import LocationItem from '@/components/common/location-item/location-item';
import { setCurrentCity } from '@/store/actions';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { CityValue } from '@/types/city';
import { City } from '@/utils/consts';

function CitiesTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.currentCity);

  const onClick = (city: CityValue) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(setCurrentCity(city));
  };

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
                  linkClasses={clsx('tabs__item', isActive && 'tabs__item--active')}
                  key={tab}
                  onClick={onClick(tab)}
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
