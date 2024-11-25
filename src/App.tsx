import MainPage from '@/pages/main-page/main-page';

import { PLACES } from '@/utils/mocks';

function App(): JSX.Element {
  return (
    <MainPage places={PLACES} />
  );
}

export default App;
