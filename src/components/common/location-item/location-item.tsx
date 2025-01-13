import { clsx } from 'clsx';
import { ElementType } from 'react';

import { ValueOf } from '@/types/helpers';
import { City } from '@/utils/consts';

type LocationItemProps = Readonly<{
  cityName: ValueOf<typeof City>;
  linkClasses?: string;
  as?: ElementType;
  onClick?: (evt: Event) => void;
}>;

function LocationItem({
  as: Tag = 'div',
  cityName,
  linkClasses,
  onClick,
  ...rest
}: LocationItemProps): JSX.Element {
  return (
    <Tag className="locations__item" {...rest}>
      <button
        className={
          clsx('locations__item-link', linkClasses)
        }
        href="#"
        onClick={onClick}
      >
        <span>{cityName}</span>
      </button>
    </Tag>
  );
}

export default LocationItem;
