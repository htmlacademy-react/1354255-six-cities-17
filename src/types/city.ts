import { ValueOf } from '@/types/helpers';
import { City } from '@/utils/consts';

type CityValue = ValueOf<typeof City>

export type { CityValue };
