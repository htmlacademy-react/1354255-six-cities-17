import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from '@/components/core/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { checkAuthAction } from '@/store/api-actions';
import { AppRoute } from '@/utils/consts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />

          <Route path={AppRoute.Login} element={<LoginPage />} />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authStatus={authStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />

          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage />}
          />

          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
