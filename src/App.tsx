import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from '@/components/core/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import authApiService from '@/service/auth-api-service';
import { AppRoute } from '@/utils/consts';

function App(): JSX.Element {
  const auth = authApiService.authStatus;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage authStatus={auth} />}
          />

          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authStatus={auth}
              >
                <FavoritesPage authStatus={auth} />
              </PrivateRoute>
            }
          />

          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage authStatus={auth} />}
          />

          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
