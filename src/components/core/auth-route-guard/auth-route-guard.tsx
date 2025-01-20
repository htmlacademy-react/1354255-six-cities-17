import { Navigate } from 'react-router-dom';

import { ValueOf } from '@/types/helpers';
import { AppRoute } from '@/utils/consts';

type AuthRouteGuardProps = Readonly<{
  shouldNavigateIf: boolean;
  to: ValueOf<typeof AppRoute>;
  children: JSX.Element;
}>;

function AuthRouteGuard({
  shouldNavigateIf,
  to,
  children,
}: AuthRouteGuardProps): JSX.Element {
  return shouldNavigateIf ? <Navigate to={to} /> : children;
}

export default AuthRouteGuard;
