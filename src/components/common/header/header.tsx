import HeaderUser from '@/components/common/header/header-user/header-user';
import Logo from '@/components/common/logo/logo';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { logoutAction } from '@/store/api-actions';

import { AuthStatus } from '@/utils/consts';

const HEADER_LOGO_PROPS = {
  width: 81,
  height: 41,
  className: 'header'
};

type HeaderProps = Readonly<{
  isLogin?: boolean;
}>

function Header({
  isLogin = false
}: HeaderProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const onLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
          {
            !isLogin &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderUser authStatus={authStatus} />
                {
                  authStatus === AuthStatus.Auth &&
                  <li className="header__nav-item">
                    {/* Клик по кнопке «Log Out» приводит к завершению сеанса работы — выходу из закрытой части приложения. */}
                    <a className="header__nav-link" onClick={onLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                }
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
