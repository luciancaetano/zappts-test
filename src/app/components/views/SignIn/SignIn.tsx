import React, {
  FormEvent, useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { emailIsValid } from '../../../utils/validators';
import {
  Logo, InputText, SubmitButton, Divider, GoogleButton, BasicSlider,
} from '../../elements';
import AppLayout from '../../partials/AppLayout/AppLayout';
import './SignIn.scss';

interface IFormValidation {
  email: boolean | string;
  password: boolean | string;
}

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<IFormValidation>({
    email: false,
    password: false,
  });
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (!submited) return;

    const validation: IFormValidation = {
      email: false,
      password: false,
    };

    if (!emailIsValid(email)) {
      validation.email = 'Email inválido';
    } else {
      validation.email = false;
    }

    if (password.trim().length < 6) {
      validation.password = 'A senha não pode ter menos de 6 caracteres';
    } else {
      validation.password = false;
    }
    setErrors(validation);
  }, [submited, email, password]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setSubmited(true);
  }, []);

  return (
    <AppLayout id="signIn">
      <section className="side sliderContainer"><BasicSlider /></section>
      <section className="side form">
        <div className="form__logo">
          <Logo />
        </div>
        <form className="form__content" onSubmit={handleSubmit}>
          <h1>Welcome to Invision</h1>
          <InputText
            value={email}
            onChange={setEmail}
            label="Users name or Email"
            error={errors.email}
          />
          <InputText
            inputType="password"
            value={password}
            onChange={setPassword}
            label="Password"
            error={errors.password}
          />

          <div className="form__content__forgotPass">
            <a href="javascript:;">Forgot password?</a>
          </div>

          <div className="form__content__submit">
            <SubmitButton label="Sign in" />
          </div>

          <Divider label="Or" />

          <div className="form__content__google">
            <GoogleButton text="Sign in with Google" />
          </div>

          <div className="form__content__introspection">
            New&nbsp;<b>Invision</b>? <Link to="/sign-up" className="green">Create Account</Link>
          </div>

        </form>
      </section>
    </AppLayout>
  );
};

export default SignIn;
