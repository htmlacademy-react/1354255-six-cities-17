import { Navigate } from 'react-router-dom';

import { ValueOf } from '@/types/helpers';
import { AppRoute, AuthStatus } from '@/utils/consts';

type PrivateRouteProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
  children: JSX.Element;
}>

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
