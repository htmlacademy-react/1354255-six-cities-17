import { createAction } from '@reduxjs/toolkit';

import { ValueOf } from '@/types/helpers';
import { UserWithAuth } from '@/types/user';
import { AuthStatus, FeatureModule } from '@/utils/consts';

const Action = {
  requireAuthorization: `${FeatureModule.AUTH}/requireAuthorization`,
} as const;

const requireAuthorization = createAction<{
  userData: UserWithAuth | undefined;
  authStatus: ValueOf<typeof AuthStatus>;
}>(Action.requireAuthorization);

export { requireAuthorization };
