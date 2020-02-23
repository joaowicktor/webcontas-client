/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { AccountsToolbar, AccountCard } from './components';
import api from '../../services/api';
import { getUserId } from '../../services/auth';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const AccountsList = () => {
  const classes = useStyles();

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    const { data } = await api.endpoints.listAccounts(getUserId());
    if (data) setAccounts(data);
  };

  return (
    <div className={classes.root}>
      <AccountsToolbar refreshAccounts={getAccounts}/>
      <div className={classes.content}>
        <Grid container spacing={3}>
          {accounts ? (
            accounts.map(account => (
              <Grid item key={account.id} lg={4} md={6} xs={12}>
                <AccountCard account={account} refreshAccounts={getAccounts}/>
              </Grid>
            ))
          ) : (
            <Typography display="inline" variant="body1">
              Nenhum cartão cadastrado
            </Typography>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default AccountsList;
