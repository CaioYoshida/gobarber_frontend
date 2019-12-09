import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form action="">
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Acessar</button>
        <Link to="/register">Create your Free Account Now!</Link>
      </form>
    </>
  );
}
