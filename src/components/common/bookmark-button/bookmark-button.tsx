import { clsx } from 'clsx';

import { ValueOf } from '@/types/helpers';
import { BookmarkType } from '@/utils/consts';

type BookmarkButtonProps = Readonly<{
  type: ValueOf<typeof BookmarkType>;
  isActive?: boolean;
  width?: number;
  height?: number;
}>

function BookmarkButton({
  type,
  isActive = false,
  width = 18,
  height = 19
}: BookmarkButtonProps): JSX.Element {
  return (
    <button className={
      clsx(
        'button',
        `${type}__bookmark-button`,
        isActive && `${type}__bookmark-button--active`
      )
    }
    type="button"
    >
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
