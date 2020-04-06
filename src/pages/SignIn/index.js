import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/fastfeet-logo.svg';
import { Container, LoginForm } from './styles';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <LoginForm>
        <img src={logo} alt="Fast Feet" />

        <Form onSubmit={handleSubmit} schema={schema}>
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
