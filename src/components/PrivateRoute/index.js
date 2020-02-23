import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const [ auth, setAuth ] = useState({
    loading: true,
    redirect: false,
  });

  useEffect(() => {
    isAuthenticated()
      .then(res => {
        if (res) {
          setAuth({loading: false});
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        setAuth({
          loading: false,
          redirect: true
        })
      });
  }, []);

  return (
    <Route {...rest} render={props => {
      if (auth.loading) {
        return null;
      }
      if (auth.redirect) {
        return <Redirect to={{pathname: '/sign-in', state: { from: props.location }}} />
      }
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }} />
)};

export default PrivateRoute;