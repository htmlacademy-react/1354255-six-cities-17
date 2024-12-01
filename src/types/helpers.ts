import { AppRoute } from '@/utils/consts';

type ValueOf<T> = T[keyof T];

const isRoutePath = (path: string): path is ValueOf<typeof AppRoute> =>
  Object.values(AppRoute).includes(path as ValueOf<typeof AppRoute>);

export { isRoutePath, type ValueOf };
