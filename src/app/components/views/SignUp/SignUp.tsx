import React, {
  FormEvent, useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Logo, InputText, SubmitButton, Divider, GoogleButton, BasicSlider,
} from '../../elements';
import AppLayout from '../../partials/AppLayout/AppLayout';
import './SignUp.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fullName: false,
  });
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (!submited) return;

    const validation = {
      email: false,
      password: false,
      fullName: false,
    };

    if (email.trim().length === 0) {
      validation.email = true;
    } else {
      validation.email = false;
    }

    if (password.trim().length === 0) {
      validation.password = true;
    } else {
      validation.password = false;
    }

    if (fullName.trim().length === 0) {
      validation.fullName = true;
    } else {
      validation.fullName = false;
    }
    setErrors(validation);
  }, [submited, email, password, fullName]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setSubmited(true);
  }, []);

  return (
    <AppLayout id="signUp">
      <section className="side sliderContainer"><BasicSlider /></section>
      <section className="side form">
        <div className="form__logo">
          <Logo />
        </div>
        <form className="form__content" onSubmit={handleSubmit}>
          <h1>Welcome to Invision</h1>
          <InputText value={fullName} onChange={setFullName} label="Full Name" error={errors.fullName} />
          <InputText value={email} onChange={setEmail} label="Users name or Email" error={errors.email} />
          <InputText inputType="password" value={password} onChange={setPassword} label="Create Password" error={errors.password} />

          <div className="form__content__submit">
            <SubmitButton label="Sign up" />
          </div>

          <Divider label="Or" />

          <div className="form__content__google">
            <GoogleButton text="Sign up with Google" />
          </div>

          <div className="form__content__introspection">
            <p>By signing up, you agree to <b>Invision</b></p>
            <p><a href="javascript:;" className="green">Terms of Conditions</a> and <a href="javascript:;" className="green">Privacy Policy</a></p>
          </div>

          <div className="form__content__introspection inline">
            Already on Invision?&nbsp;<Link to="/sign-in" className="green">Log in</Link>
          </div>
        </form>
      </section>
    </AppLayout>
  );
};

export default SignUp;
