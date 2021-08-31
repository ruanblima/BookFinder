import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import themes from '~/shared/themes';

import Routes from '~/routes';

const App: React.FC = () => (
  <ThemeProvider theme={themes.light}>
    <Routes />
  </ThemeProvider>
);

export default App;
