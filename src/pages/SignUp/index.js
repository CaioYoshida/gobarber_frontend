import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    console.tron.log(name, email, password);
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Entire Name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">Im already registered</Link>
      </Form>
    </>
  );
}
