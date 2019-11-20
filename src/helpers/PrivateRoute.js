import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

const StyledRoute = styled(Route)`
  grid-area: page;
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState({
    loading: true,
    redirect: false
  });

  useEffect(() => {
    isAuthenticated()
      .then(res => {
        if (res) {
          setAuth({ loading: false });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        setAuth({
          loading: false,
          redirect: true
        });
      });
  }, []);

  return (
    <StyledRoute
      {...rest}
      render={props => {
        if (auth.loading) {
          return null;
        }
        if (auth.redirect) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
