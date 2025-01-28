import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppSelector } from '@/hooks/store/use-app-selector';
import { getUser } from '@/store/modules/auth';
import { getFavorites } from '@/store/modules/favorite';

import { ValueOf } from '@/types/helpers';
import { AppRoute, AuthStatus } from '@/utils/consts';

type HeaderUserProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>;

function HeaderUser({ authStatus }: HeaderUserProps): JSX.Element {
  const link =
    authStatus === AuthStatus.Auth ? AppRoute.Favorites : AppRoute.Login;
  const favoritesCount = useAppSelector(getFavorites, shallowEqual).length;
  const user = useAppSelector(getUser);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={link}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        {authStatus === AuthStatus.Auth ? (
          <>
            <span className="header__user-name user__name">{user?.email}</span>
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
