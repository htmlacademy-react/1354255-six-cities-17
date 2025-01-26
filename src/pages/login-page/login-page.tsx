import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { setCurrentCity } from '@/store/modules/cities/actions';

import Header from '@/components/common/header/header';
import LocationItem from '@/components/common/location-item/location-item';
import LoginForm from '@/components/modules/login/login-form/login-form';

import { AppRoute, City } from '@/utils/consts';

const getRandomCity = () => Object.values(City)[Math.floor(Math.random() * Object.values(City).length)];

function LoginPage(): JSX.Element {
  const randomCity = getRandomCity();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLocalionClick = () => {
    dispatch(setCurrentCity(randomCity));

    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>

      <Header isLogin />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationItem cityName={randomCity} onClick={handleLocalionClick} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
