import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, CardContent, CardActions, Typography, Grid, Divider, IconButton } from '@material-ui/core';

import { useStyles } from './styles';
import { CustomDialog, CustomSnackbar } from '../../../../components';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import api from '../../../../services/api';

const AccountCard = props => {
  const { className, account, refreshAccounts, ...rest } = props;
  const [openModal, setOpenModal] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: ''
  });
  

  const classes = useStyles();

  const deleteAccount = async accountId => {
    const { data } = await api.endpoints.deleteAccount(accountId);
    setSnackbar({
      msg: data.msg,
      open: true
    });
    refreshAccounts();
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = value => {
    setOpenModal(false);
    refreshAccounts();
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <div className={classes.imageContainer}>
            <img alt="Product" className={classes.image} src="/images/placeholder.jpg" />
          </div>
          <Typography align="center" gutterBottom variant="h4">
            {account.name}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Grid container justify="space-between">
            <Grid className={classes.statsItem} item>
              <AttachMoneyIcon className={classes.statsIcon} />
              <Typography display="inline" variant="body2">
                Saldo inicial: R$ {account.opening_balance}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <IconButton aria-label="edit" size="small" onClick={handleModalOpen}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" size="small" onClick={() => deleteAccount(account.id)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <CustomDialog
        open={openModal}
        onClose={handleModalClose}
        type="edit"
        name="Conta"
        account={account}
      />
      <CustomSnackbar snackbar={snackbar} handleClose={handleSnackbarClose} />
    </>
  );
};

AccountCard.propTypes = {
  className: PropTypes.string,
  account: PropTypes.object.isRequired
};

export default AccountCard;
