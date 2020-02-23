import React, { useState } from 'react';
import clsx from 'clsx';
import { Typography, Fab, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { TransactionsDialog } from '../../components'
import { useStyles } from './styles';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const TransactionsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    isExpense: false
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = isExpense => {
    handleClose();
    setModalOpen(true);

    if (!isExpense) {
      setModalData({
        name: 'Receita',
        isExpense: false
      })
    } else {
      setModalData({
        name: 'Despesa',
        isExpense: true
      })
    }
  }

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <Typography className={classes.title} variant="h2">
          Lançamentos
        </Typography>
        <Fab size="small" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <AddIcon />
        </Fab>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={() => handleModalOpen(false)}>
            <ListItemIcon className={classes.income}>
              <AddCircleIcon size="small"/>
            </ListItemIcon>
            <ListItemText primary="Receita" />
          </MenuItem>
          <MenuItem onClick={() => handleModalOpen(true)}>
            <ListItemIcon className={classes.expense}>
              <RemoveCircleIcon size="small" />
            </ListItemIcon>
            <ListItemText primary="Despesa" />
          </MenuItem>
        </Menu>
      </div>
      <TransactionsDialog
        open={modalOpen}
        onClose={handleModalClose}
        mode="new"
        config={modalData}
      />
    </div>
  );
};

export default TransactionsToolbar;
