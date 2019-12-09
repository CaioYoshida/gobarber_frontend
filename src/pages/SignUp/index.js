import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form>
        <Input name="name" placeholder="Entire Name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">Im already registered</Link>
      </Form>
    </>
  );
}
