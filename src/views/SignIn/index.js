import React, { useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Grid, Button, TextField, Link, Typography, CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';
import { CustomSnackbar } from '../../components'
import { login } from '../../services/auth';
import api from '../../services/api';

const SignIn = props => {
  const classes = useStyles();

  const [isLoading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: ''
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    event.persist();

    setLoginForm(state => ({
      ...state,
        [event.target.name]: event.target.value
      }));
  };

  const handleSignIn = async event => {
    event.preventDefault();
    setLoading(true);

    const { data } = await api.endpoints.login(loginForm);
    if (!data.success) {
      setSnackbar({
        ...snackbar,
        msg: data.msg,
        open: true
      });
    } else {
      login(data)
      props.history.push('/');
    }

    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                Seja bem-vindo(a) ao WebContas!
              </Typography>
              <div className={classes.person}>
                <Typography className={classes.quoteText} variant="h4">
                  Tenha o controle de suas finanças em mãos e descomplique de vez sua vida financeira.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignIn}>
                <Typography className={classes.title} variant="h2">
                  Acesse sua conta
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  required
                  label="E-mail"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={loginForm.email || ''}
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
                  value={loginForm.password || ''}
                  variant="outlined"
                />
                <div className={classes.action}>
                  {!isLoading ?
                  <Button className={classes.signInButton} color="primary" fullWidth size="large" type="submit" variant="contained">
                    Entrar
                  </Button>
                  : <CircularProgress />
                  }
                </div>
                <Typography color="textSecondary" variant="body1">
                  Ainda não tem uma conta?{' '}
                  <Link component={RouterLink} to="/sign-up" variant="h6">
                    Cadastre-se!
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
      <CustomSnackbar snackbar={snackbar} handleClose={handleClose}></CustomSnackbar>
    </div>
  );
};

export default withRouter(SignIn);
