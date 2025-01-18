import { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '@/components/common/header/header';
import LocationItem from '@/components/common/location-item/location-item';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { loginAction } from '@/store/api-actions';
import { City } from '@/utils/consts';

type Form = {
  login: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<Form>({
    login: '',
    password: '',
  });

  const onInputChange = (key: keyof Form) => (evt: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [key]: evt.target.value,
    });
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (Object.values(formValues).every(Boolean)) {
      dispatch(loginAction({
        ...formValues
      }));
    }
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

            <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={onInputChange('login')}
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={onInputChange('password')}
                />
              </div>

              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
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
