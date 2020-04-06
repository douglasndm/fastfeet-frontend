import React from 'react';

import logo from '../../assets/fastfeet-logo.svg';
import { Container, LoginForm } from './styles';

export default function SignIn() {
  return (
    <Container>
      <LoginForm>
        <img src={logo} alt="Fast Feet" />

        <form>
          <strong>SEU E-MAIL</strong>
          <input type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <input type="password" placeholder="***********" />

          <button type="submit">Entrar no sistema</button>
        </form>
      </LoginForm>
    </Container>
  );
}
