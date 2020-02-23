import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Dialog, InputAdornment } from '@material-ui/core';

import { useStyles, DialogTitle, DialogContent, DialogActions } from './styles'

import api from '../../services/api';
import { getUserId } from '../../services/auth';
import { CustomSnackbar } from '../../components';

const CustomDialog = props => {
  const { onClose, open, type, name, account } = props;

  const [accountForm, setAccountForm] = useState({
    name: '',
    opening_balance: 0
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: ''
  });

  useEffect(() => {
    if (type === 'edit') {
      setAccountForm(account);
    }
  }, []);

  const handleChange = event => {
    event.persist();

    setAccountForm(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  const createAccount = async () => {
    const { data } = await api.endpoints.createAccount(getUserId(), accountForm);
    setSnackbar({
      msg: data.msg,
      open: true
    });
    onClose();
  };

  const editAccount = async accountId => {
    const { data } = await api.endpoints.editAccount(accountId, accountForm);
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
          {type === 'new' ? `Nova ${name}` : `Editar ${name}`}
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.imageContainer}>
            <img alt="" className={classes.image} src="/images/placeholder.jpg" />
          </div>
          <TextField
            fullWidth
            className={classes.textField}
            label="Nome"
            name="name"
            type="text"
            value={accountForm.name || ''}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            className={classes.textField}
            label="Saldo Inicial"
            name="opening_balance"
            onChange={handleChange}
            value={accountForm.opening_balance || ''}
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              type === 'new' ? createAccount() : editAccount(account.id);
            }}
            color="primary"
            variant="contained">
            {type === 'new' ? 'Adicionar' : 'Editar'}
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar snackbar={snackbar} handleClose={handleSnackbarClose} />
    </div>
  );
}

CustomDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default CustomDialog;