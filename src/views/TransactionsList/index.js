import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TransactionsTable, TransactionsToolbar } from './components';
import api from '../../services/api';
import { getUserId } from '../../services/auth';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TransactionsList = () => {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, [])

  const getTransactions = async () => {
    const { data } = await api.endpoints.listTransactions(getUserId());
    if (data) setTransactions(data);
  }

  return (
    <div className={classes.root}>
      <TransactionsToolbar />
      <div className={classes.content}>
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
};

export default TransactionsList;
