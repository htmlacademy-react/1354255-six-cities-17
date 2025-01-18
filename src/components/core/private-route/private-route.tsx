import { isValidElement, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks/store/useAppSelector';
import { getAuthStatus } from '@/store/modules/auth/selectors';

import { AppRoute, AuthStatus } from '@/utils/consts';

function PrivateRoute({ children }: PropsWithChildren): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthStatus.Auth && isValidElement(children) ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
