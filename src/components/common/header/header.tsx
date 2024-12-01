import Logo from '@/components/common/logo/logo';

import { ValueOf } from '@/types/helpers';
import { AuthStatus } from '@/utils/consts';
import HeaderUser from './header-user/header-user';

const HEADER_LOGO_PROPS = {
  width: 81,
  height: 41,
  className: 'header'
};

type HeaderProps = Readonly<{
  authStatus?: ValueOf<typeof AuthStatus>;
  isLogin?: boolean;
}>

function Header({
  authStatus = AuthStatus.Unknown,
  isLogin = false
}: HeaderProps): JSX.Element {
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
                    <a className="header__nav-link" href="#">
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
