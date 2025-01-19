import { ChangeEvent, FormEvent, useState } from 'react';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { loginAction } from '@/store/modules/auth/api-actions';

type Form = {
  login: string;
  password: string;
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<Form>({
    login: '',
    password: '',
  });

  const handleInputChange =
    (key: keyof Form) => (evt: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [key]: evt.target.value,
      });
    };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (Object.values(formValues).every(Boolean)) {
      dispatch(
        loginAction({
          ...formValues,
        })
      );
    }
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange('login')}
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
          onChange={handleInputChange('password')}
        />
      </div>

      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
