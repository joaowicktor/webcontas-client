import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Link, Typography, CircularProgress } from '@material-ui/core';

const UserForm = props => {
  const { classes, user, handleChange, handleSignUp, isLoading } = props;
  return (
    <form className={classes.form} onSubmit={handleSignUp}>
      <Typography className={classes.title} variant="h2">
        Criar uma conta
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Preencha seus dados abaixo
      </Typography>
      <TextField
        className={classes.textField}
        fullWidth
        required
        label="Nome"
        name="name"
        onChange={handleChange}
        type="text"
        value={user.name || ''}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        fullWidth
        required
        label="E-mail"
        name="email"
        onChange={handleChange}
        type="email"
        value={user.email || ''}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        fullWidth
        required
        label="Senha"
        name="password"
        onChange={handleChange}
        type="password"
        value={user.password || ''}
        variant="outlined"
      />
      <div className={classes.action}>
        {!isLoading ?
        <Button className={classes.signUpButton} color="primary" fullWidth size="large" type="submit" variant="contained">
          Cadastrar-se
        </Button>
        : <CircularProgress />
        }
      </div>
      <Typography color="textSecondary" variant="body1">
        Já tem uma conta?{' '}
        <Link component={RouterLink} to="/sign-in" variant="h6">
          Fazer Login
        </Link>
      </Typography>
    </form>
  );
}

export default UserForm;