import { memo } from 'react';

import { useAppDispatch } from '@/hooks/store/use-app-dispatch';
import { useAppSelector } from '@/hooks/store/use-app-selector';
import { getAuthStatus, logoutAction } from '@/store/modules/auth';

import HeaderUser from '@/components/common/header/header-user/header-user';
import Logo from '@/components/common/logo/logo';

import { AuthStatus } from '@/utils/consts';

const HEADER_LOGO_PROPS = {
  width: 81,
  height: 41,
  className: 'header',
};

type HeaderProps = Readonly<{
  isLogin?: boolean;
}>;

function HeaderComponent({ isLogin = false }: HeaderProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  const handleLogoutClick = (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo {...HEADER_LOGO_PROPS} />
          </div>
          {!isLogin && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderUser authStatus={authStatus} />
                {authStatus === AuthStatus.Auth && (
                  <li className="header__nav-item">
                    {/* Клик по кнопке «Log Out» приводит к завершению сеанса работы — выходу из закрытой части приложения. */}
                    <a className="header__nav-link" onClick={handleLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);
