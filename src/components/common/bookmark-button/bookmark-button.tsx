import { clsx } from 'clsx';
import { memo } from 'react';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { updateOfferFavoriteStatusAction } from '@/store/modules/favorite/api-actions';

import { ValueOf } from '@/types/helpers';
import { OfferCard, OfferFull } from '@/types/offer';
import { BookmarkType } from '@/utils/consts';

type BookmarkButtonProps = Readonly<{
  type: ValueOf<typeof BookmarkType>;
  isActive?: boolean;
  width?: number;
  height?: number;
  offer: OfferCard | OfferFull;
}>;

function BookmarkButton({
  type,
  offer,
  isActive = false,
  width = 18,
  height = 19,
}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(updateOfferFavoriteStatusAction({ offer, isFavorite: isActive }));
  };

  return (
    <button
      className={clsx(
        'button',
        `${type}__bookmark-button`,
        isActive && `${type}__bookmark-button--active`
      )}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isActive ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default memo(BookmarkButton);
