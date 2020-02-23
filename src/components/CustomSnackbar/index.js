import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const CustomSnackbar = props => {
  const { snackbar, handleClose } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackbar.open}
      autoHideDuration={4000}
      onClose={handleClose}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      message={<span id="message-id">{snackbar.msg}</span>}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
}

CustomSnackbar.propTypes = {
  snackbar: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
};


export default CustomSnackbar;