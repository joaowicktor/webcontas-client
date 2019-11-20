import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LayoutApp from './styles';

import PrivateRoute from '../helpers/PrivateRoute';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
`;

const MainLayout = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={SignUp} />
        <LayoutApp>
          {/* <Route exact path='/' component={Dashboard} />
          <Route exact path='/pedidos' component={Orders} />
          <Route exact path='/produtos' component={Products} /> */}
        </LayoutApp>
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default MainLayout;
