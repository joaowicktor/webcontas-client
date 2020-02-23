import React from 'react';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { RouteWithLayout, PrivateRoute } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  AccountsList as AccountsListView,
  TransactionsList as TransactionsListView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <PrivateRoute component={DashboardView} exact layout={MainLayout} path="/dashboard" />
        <PrivateRoute component={TransactionsListView} exact layout={MainLayout} path="/lancamentos" />
        <PrivateRoute component={AccountsListView} exact layout={MainLayout} path="/contas" />
        <RouteWithLayout component={AccountView} exact layout={MainLayout} path="/account" />
        <RouteWithLayout component={SettingsView} exact layout={MainLayout} path="/settings" />
        <RouteWithLayout component={SignUpView} exact layout={MinimalLayout} path="/sign-up" />
        <RouteWithLayout component={SignInView} exact layout={MinimalLayout} path="/sign-in" />
        <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
