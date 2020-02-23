import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Dialog, InputAdornment, Grid, FormControl, Select, InputLabel, MenuItem, OutlinedInput, IconButton } from '@material-ui/core';

import { useStyles, DialogTitle, DialogContent, DialogActions } from './styles'

import api from '../../../../services/api';
import { getUserId } from '../../../../services/auth';
import { CustomSnackbar, DatePicker } from '../../../../components';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const TransactionsDialog = props => {
  const { onClose, open, mode, config, transaction } = props;

  const classes = useStyles();
  
  const [transactionForm, setTransactionForm] = useState({
    description: '',
    amount: 0,
    occurrence_date: new Date(),
    is_paid: false,
    is_expense: false,
    account_id: 0,
    category_id: 0
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: ''
  });

  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (mode === 'edit') {
      setTransactionForm(transaction);
    } else {
      getUserAccounts();
    }
  }, []);

  const getUserAccounts = async () => {
    const { data } = await api.endpoints.listAccounts(getUserId());
    setAccounts(data);
  }

  const getUserCategories = async type => {
    const { data } = await api.endpoints.listCategories(type);
    setCategories(data);
  }

  const handleChange = event => {
    event.persist();
    
    setTransactionForm(state => ({
      ...state,
      [event.target.name]: event.target.value,
      is_expense: config.isExpense
    }));
  };

  const handleDateChange = (date) => {
    
    setTransactionForm(state => ({
      ...state,
      occurrence_date: date
    }));
  }

  const setTransactionPay = isPaid => {
    setTransactionForm(state => ({
      ...state,
      is_paid: isPaid
    }))
  }

  const handleClose = () => {
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  const createTransaction = async () => {
    const { data } = await api.endpoints.createTransaction(transactionForm);
    console.log(transactionForm);
    setSnackbar({
      msg: data.msg,
      open: true
    });
    onClose();
  };

  const editAccount = async accountId => {
    const { data } = await api.endpoints.editAccount(accountId, transactionForm);
    setSnackbar({
      msg: data.msg,
      open: true
    });
    onClose();
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {mode === 'new' ? `Nova ${config.name}` : `Editar ${config.name}`}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            className={classes.textField}
            label="Descrição"
            name="description"
            type="text"
            value={transactionForm.description || ''}
            variant="outlined"
            onChange={handleChange}
          />
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={classes.textField}
                label="Valor"
                name="amount"
                onChange={handleChange}
                value={transactionForm.amount || ''}
                type="text"
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <DatePicker label="Data" fieldName="occurrence_date" data={transactionForm} handleChange={handleDateChange}/>
            </Grid>
            <Grid item xs={1}>
              <IconButton size="small" onClick={() => setTransactionPay(!transactionForm.is_paid)}>
                {transactionForm.is_paid ? <ThumbUpIcon className={classes.paid} /> : <ThumbDownIcon className={classes.notPaid} />}
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-age-simple">Conta</InputLabel>
                <Select
                  id="demo-simple-select-outlined"
                  value={transactionForm.account_id}
                  onChange={handleChange}
                  input={ <OutlinedInput name="account_id" labelWidth={40} /> }
                >
                  { accounts ?
                    accounts.map(account => 
                    <MenuItem key={account.id} value={account.id}>{ account.name }</MenuItem>
                    )
                  : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-age-simple">Categoria</InputLabel>
                <Select
                  onOpen={() => getUserCategories(!config.isExpense ? 'income' : 'expense')}
                  id="demo-simple-select-outlined"
                  value={transactionForm.category_id}
                  onChange={handleChange}
                  input={ <OutlinedInput name="category_id" labelWidth={65} /> }
                >
                  { categories ?
                    categories.map(category => 
                    <MenuItem key={category.id} value={category.id}>{ category.name }</MenuItem>
                    )
                  : null}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              mode === 'new' ? createTransaction() : editAccount(transaction.id);
            }}
            color="primary"
            variant="contained">
            {mode === 'new' ? 'Adicionar' : 'Editar'}
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar snackbar={snackbar} handleClose={handleSnackbarClose} />
    </div>
  );
}

TransactionsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default TransactionsDialog;