import MainPage from '@/pages/main-page/main-page';

import { PlaceCard } from '@/types/place-card';

type AppProps = Readonly<{
  places: PlaceCard[];
}>

function App({ places }: AppProps): JSX.Element {
  return (
    <MainPage places={places} />
  );
}

export default App;
