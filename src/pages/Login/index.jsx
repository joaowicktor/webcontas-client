import React, { useState } from 'react';

import api from '../../services/api';
import { login } from '../../services/auth';

import { CssBaseline, Button, Box } from '@material-ui/core';

import logo from '../../assets/logo.svg';

import {
  useStyles,
  LoginPage,
  LoginForm,
  Logo,
  Title,
  FormGroup,
  StyledInput,
  MessageBox,
  Signup,
  Text,
  Container,
  SignupContainer,
  SignUpButton
} from './styles';

const Login = props => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseStatus, setResponseStatus] = useState(200);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Preencha email e senha para continuar');
    } else {
      try {
        const response = await api.post('/login', { email, password });
        setResponseStatus(response.status);
        login(response.data);
        props.history.push('/');
      } catch (err) {
        console.log(err);
        setErrorMessage('Email ou senha inválidos');
        setResponseStatus(err.response.status);
      }
    }
  }

  return (
    <LoginPage>
      <CssBaseline />
      <Container>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <LoginForm onSubmit={handleSignIn}>
            <Logo src={logo} alt='logo' />
            {responseStatus !== 200 ? <MessageBox>{errorMessage}</MessageBox> : null}
            <FormGroup>
              <Title>Acesse sua conta</Title>
              <StyledInput label='E-mail' margin='normal' variant='outlined' />
              <StyledInput label='Senha' margin='normal' variant='outlined' type='password' />
            </FormGroup>
            <Button variant='contained' className={classes.button} color='primary' type='submit'>
              Entrar
            </Button>
          </LoginForm>
          <Signup>
            <SignupContainer>
              <Title textColor='#fff'>Seja bem-vindo(a) ao WebContas!</Title>
              <Text>Tenha o controle de suas finanças em mãos e descomplique de vez sua vida financeira.</Text>
              <SignUpButton to='/cadastro'>Cadastre-se</SignUpButton>
            </SignupContainer>
          </Signup>
        </Box>
      </Container>
    </LoginPage>
  );
};

export default Login;
