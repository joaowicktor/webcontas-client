import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { TotalExpenses, TotalIncome, TotalBalance, IncomeExpenseChart, UsersByDevice } from './components';

import api from '../../services/api';
import { getUserId } from '../../services/auth';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [transactionsAmount, setTransactionsAmount] = useState([]);
  const [balance, setBalance] = useState(0.00);

  useEffect(() => {
    getTransactionsAmount();
  }, []);

  const getTransactionsAmount = async () => {
    const { data } = await api.endpoints.getTransactionsAmount(getUserId());
    if (data) {
      console.log(data);
      setTransactionsAmount(data);
      const [income, expense] = data.paid;
      setBalance((income.total - expense.total).toFixed(2));
    };
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        { transactionsAmount.paid ? (transactionsAmount.paid).map(transactionAmount => (
          <Grid key={transactionAmount.is_expense} item lg={4} sm={6} xl={4} xs={12}>
            {!transactionAmount.is_expense ? <TotalIncome amount={transactionsAmount} /> : <TotalExpenses amount={transactionsAmount}/> }
          </Grid>
        )) : null}
        <Grid item lg={4} sm={6} xl={4} xs={12}>
          <TotalBalance balance={balance}/>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <IncomeExpenseChart />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
