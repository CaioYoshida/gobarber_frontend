import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your e-mail adress" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input type="password" name="Password" placeholder="New Password" />
        <Input
          type="password"
          name="ConfirmPassword"
          placeholder="New Password's Confirmation"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Log out</button>
    </Container>
  );
}
