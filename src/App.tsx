import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from '@/components/core/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import { AppRoute, AuthStatus } from '@/utils/consts';
import { PLACES } from '@/utils/mocks';

const AUTH = AuthStatus.NoAuth;

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage places={PLACES} authStatus={AUTH} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authStatus={AUTH}
              >
                <FavoritesPage authStatus={AUTH} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage authStatus={AUTH} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
