import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

import api from '../../../../../../services/api';
import { getUserId } from '../../../../../../services/auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data } = await api.endpoints.getUser(getUserId());
    setUser(data);
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      { user ? 
      <>
        <Avatar 
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVIcgpLDoeLjY8vlNsKfNHhjfGKIFhWQtuqjnc7ofhKDUCHMLv'
          to="/account"
        />
        <Typography className={classes.name} variant="h4">
          {user.name}
        </Typography>
      </>
      : null } 
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
