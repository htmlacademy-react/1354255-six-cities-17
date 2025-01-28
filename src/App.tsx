import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAppDispatch } from '@/hooks/store/use-app-dispatch';
import { useAppSelector } from '@/hooks/store/use-app-selector';
import { checkAuthAction, getAuthStatus } from '@/store/modules/auth';

import AuthRouteGuard from '@/components/core/auth-route-guard/auth-route-guard';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import LoginPage from '@/pages/login-page/login-page';
import MainPage from '@/pages/main-page/main-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import OfferPage from '@/pages/offer-page/offer-page';

import { AppRoute, AuthStatus } from '@/utils/consts';

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

      <ToastContainer position="bottom-right" />
    </HelmetProvider>
  );
}

export default App;
