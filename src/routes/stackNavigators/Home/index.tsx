import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/modules/Books/views/Home';
import BookInformation from '~/modules/Books/views/BookInformation';
import Header from '~/shared/components/Header';

import {
  HOME_SCREEN,
  BOOKS_INFORMATION_SCREEN,
} from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME_SCREEN}
      component={Home}
      options={{
        header: () => <Header />,
      }}
    />
    <Stack.Screen
      name={BOOKS_INFORMATION_SCREEN}
      component={BookInformation}
      options={{
        header: () => <Header enableNavigation title="Detalhes" />,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
