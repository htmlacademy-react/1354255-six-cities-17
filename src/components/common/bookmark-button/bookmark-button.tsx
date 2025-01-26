import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { getAuthStatus } from '@/store/modules/auth/selectors';
import { updateOfferFavoriteStatusAction } from '@/store/modules/favorite/api-actions';

import { ValueOf } from '@/types/helpers';
import { OfferCard, OfferFull } from '@/types/offer';
import { AppRoute, AuthStatus, BookmarkType } from '@/utils/consts';

type BookmarkButtonProps = Readonly<{
  type: ValueOf<typeof BookmarkType>;
  isActive?: boolean;
  width?: number;
  height?: number;
  offer: OfferCard | OfferFull;
  onUpdateInfo: () => Promise<unknown>;
}>;

function BookmarkButton({
  type,
  offer,
  isActive = false,
  width = 18,
  height = 19,
  onUpdateInfo,
}: BookmarkButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const notAuthed = useAppSelector(getAuthStatus) !== AuthStatus.Auth;

  const handleFavoriteClick = async () => {
    if (notAuthed) {
      navigate(AppRoute.Login);
    }

    await dispatch(updateOfferFavoriteStatusAction({ offer, isFavorite: isActive }));

    if (onUpdateInfo) {
      await onUpdateInfo();
    }
  };

  return (
    <button
      className={clsx(
        'button',
        `${type}__bookmark-button`,
        isActive && `${type}__bookmark-button--active`
      )}
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
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

export default BookmarkButton;
