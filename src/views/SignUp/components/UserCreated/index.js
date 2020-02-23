import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';

const UserCreated = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HowToRegIcon color="primary" className={classes.icon}/>
      <div className={classes.message} >
        <Typography variant="h2">Usuário criado com sucesso!</Typography>
        <Typography color="textSecondary" variant="h5" >Você já pode fazer login.</Typography>   
      </div>
      <Button color="primary" variant="contained" component={RouterLink} to="/sign-in">
        Ir para a tela de login
      </Button>
    </div>
  );
}

export default UserCreated;
