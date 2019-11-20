import React, { useState } from 'react';

import api from '../../services/api';
import { login } from '../../services/auth';

import { CssBaseline, Button, Box } from '@material-ui/core';

import logo from '../../assets/logo.svg';

import {
  useStyles,
  SignUpPage,
  SignUpForm,
  Logo,
  Title,
  FormGroup,
  StyledInput,
  SignIn,
  Text,
  Container,
  SignInContainer,
  SignInButton,
  PasswordGroup
} from './styles';

const SignUp = props => {
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
    <SignUpPage>
      <CssBaseline />
      <Container>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <SignIn>
            <SignInContainer>
              <Title textColor='#fff'>Seja bem-vindo(a) ao WebContas!</Title>
              <Text>Se já possui cadastro, clique no botão abaixo para acessar sua conta.</Text>
              <SignInButton to='/login'>Entrar</SignInButton>
            </SignInContainer>
          </SignIn>
          <SignUpForm onSubmit={handleSignIn}>
            <Logo src={logo} alt='logo' />
            <FormGroup>
              <Title>Criar uma conta</Title>
              <StyledInput label='E-mail' margin='normal' variant='outlined' />
              <PasswordGroup>
                <StyledInput label='Senha' margin='normal' variant='outlined' type='password' />
                <StyledInput label='Repita sua senha' margin='normal' variant='outlined' type='password' />
              </PasswordGroup>
            </FormGroup>
            <Button variant='contained' className={classes.button} color='primary' type='submit'>
              Cadastrar-se
            </Button>
          </SignUpForm>
        </Box>
      </Container>
    </SignUpPage>
  );
};

export default SignUp;
