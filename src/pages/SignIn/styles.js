import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #7d40e7;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 420px;
  height: 500px;
  text-align: center;
  background: #fff;
  padding: 35px;
  border-radius: 4px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

  img {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      font-family: 'Roboto', sans-serif;
      text-align: left;
      margin-bottom: 5px;
      margin-top: 10px;
      font-size: 16px;
    }

    input {
      background: #fff;
      height: 40px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
    }

    button {
      margin: 15px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: 500ms background;

      &:hover {
        background: ${darken(0.2, '#7d40e7')};
      }
    }
  }
`;
