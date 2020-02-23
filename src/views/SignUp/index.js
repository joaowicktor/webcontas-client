import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useStyles } from './styles';
import { Grid, IconButton, Snackbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import api from '../../services/api';

import { UserForm, UserCreated } from './components';

const SignUp = props => {
  const classes = useStyles();
  
  const [isLoading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: ''
  });
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = event => {
    event.persist();

    setUser(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
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

  const handleSignUp = async event => {
    event.preventDefault();
    setLoading(true);
    const { data } = await api.endpoints.createUser(user);

    if (!data.success) {
      setSnackbar({
        ...snackbar,
        msg: data.msg,
        open: true
      });
    } else {
      setUserCreated(true);
    }
    setLoading(false);
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
              {!userCreated ?
                <UserForm classes={classes} user={user} handleChange={handleChange} handleSignUp={handleSignUp} isLoading={isLoading}></UserForm>
                : <UserCreated></UserCreated>
              }
            </div>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={<span id="message-id">{snackbar.msg}</span>}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" className={classes.close} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default withRouter(SignUp);
