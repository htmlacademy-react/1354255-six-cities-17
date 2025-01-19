import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { checkAuthAction } from '@/store/modules/auth/api-actions';

import PrivateRoute from '@/components/core/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import { AppRoute } from '@/utils/consts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />

          <Route path={AppRoute.Login} element={<LoginPage />} />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />

          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />

          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
