import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/fastfeet-logo.svg';
import { Container, LoginForm } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <LoginForm>
        <img src={logo} alt="Fast Feet" />

        <Form onSubmit={handleSubmit}>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <Input name="password" type="password" placeholder="***********" />

          <button type="submit">Entrar no sistema</button>
        </Form>
      </LoginForm>
    </Container>
  );
}
