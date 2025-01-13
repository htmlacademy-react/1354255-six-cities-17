import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from '@/store';

type State = ReturnType<typeof store.getState>;

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useAppSelector };
