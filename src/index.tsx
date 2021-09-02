import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider as StoreProvider } from 'react-redux';

import themes from '~/shared/themes';
import { store } from '~/shared/store';
import Routes from '~/routes';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={themes.light}>
      <Routes />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
