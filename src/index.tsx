import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import themes from '~/shared/themes';

import Login from './views/Login';

const App: React.FC = () => (
  <ThemeProvider theme={themes.light}>
    <Login />
  </ThemeProvider>
);

export default App;
