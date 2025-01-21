import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppSelector } from '@/hooks/store/useAppSelector';
import { getFavorites } from '@/store/modules/favorite/selectors';

import { ValueOf } from '@/types/helpers';
import { AppRoute, AuthStatus } from '@/utils/consts';

type HeaderUserProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>;

function HeaderUser({ authStatus }: HeaderUserProps): JSX.Element {
  const link =
    authStatus === AuthStatus.Auth ? AppRoute.Favorites : AppRoute.Login;
  const favoritesCount = useAppSelector(getFavorites, shallowEqual).length;

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={link}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        {authStatus === AuthStatus.Auth ? (
          <>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">{favoritesCount}</span>
          </>
        ) : (
          <span className="header__login">Sign in</span>
        )}
      </Link>
    </li>
  );
}

export default HeaderUser;
