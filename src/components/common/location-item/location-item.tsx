import { clsx } from 'clsx';
import { ElementType } from 'react';

import { ValueOf } from '@/types/helpers';
import { City } from '@/utils/consts';

type LocationItemProps = Readonly<{
  cityName: ValueOf<typeof City>;
  linkClasses?: string;
  as?: ElementType;
}>

function LocationItem({
  as: Tag = 'div',
  cityName,
  linkClasses,
  ...rest
}: LocationItemProps): JSX.Element {
  return (
    <Tag className="locations__item" {...rest}>
      <a
        className={clsx('locations__item-link',linkClasses)}
        href="#"
      >
        <span>{cityName}</span>
      </a>
    </Tag>
  );
}

export default LocationItem;
