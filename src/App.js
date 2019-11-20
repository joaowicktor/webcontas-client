import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import './assets/scss/index.scss';
import MainLayout from './layouts/MainLayout';

const App = () => (
  <ThemeProvider theme={theme}>
    <MainLayout />
  </ThemeProvider>
);

export default App;
