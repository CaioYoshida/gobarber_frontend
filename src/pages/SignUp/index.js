import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="gobarber" />

      <form action="">
        <input placeholder="Entire Name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
        <Link to="/">I'm already registered</Link>
      </form>
    </>
  );
}
