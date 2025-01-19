import { Helmet } from 'react-helmet-async';

import Header from '@/components/common/header/header';
import LocationItem from '@/components/common/location-item/location-item';
import LoginForm from '@/components/modules/login/login-form/login-form';

import { City } from '@/utils/consts';

function LoginPage(): JSX.Element {
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
              <LocationItem cityName={City.Amsterdam} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
