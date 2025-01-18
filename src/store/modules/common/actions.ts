import { createAction } from '@reduxjs/toolkit';

import { CityValue } from '@/types/city';
import { ValueOf } from '@/types/helpers';
import { FeatureModule, SortType } from '@/utils/consts';

const Action = {
  setCurrentCity: `${FeatureModule.COMMON}/setCurrentCity`,
  setCurrentSort: `${FeatureModule.COMMON}/setCurrentSort`,
} as const;

const setCurrentCity = createAction<CityValue>(Action.setCurrentCity);

const setCurrentSort = createAction<ValueOf<typeof SortType>>(
  Action.setCurrentSort
);

export { setCurrentCity, setCurrentSort };
