import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import { CustomDialog } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(2)
  },
}));

const AccountsToolbar = props => {
  const { className, refreshAccounts, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    refreshAccounts();
    setOpen(false);
  };
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Typography className={classes.title} variant="h2">
          Contas
        </Typography>
        <Fab size="small" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>
      <CustomDialog
        open={open}
        onClose={handleClose}
        type="new"
        name="Conta"
      />
    </div>
  );
};

AccountsToolbar.propTypes = {
  className: PropTypes.string
};

export default AccountsToolbar;
