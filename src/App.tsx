import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { checkAuthAction } from '@/store/modules/auth/api-actions';

import AuthRouteGuard from '@/components/core/auth-route-guard/auth-route-guard';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import { AppRoute, AuthStatus } from '@/utils/consts';
import { useAppSelector } from './hooks/store/useAppSelector';
import { getAuthStatus } from './store/modules/auth/selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />

          <Route
            path={AppRoute.Login}
            element={
              <AuthRouteGuard
                shouldNavigateIf={authStatus === AuthStatus.Auth}
                to={AppRoute.Main}
              >
                <LoginPage />
              </AuthRouteGuard>
            }
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <AuthRouteGuard
                shouldNavigateIf={authStatus === AuthStatus.NoAuth}
                to={AppRoute.Login}
              >
                <FavoritesPage />
              </AuthRouteGuard>
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
