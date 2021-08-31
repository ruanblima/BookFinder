import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/shared/views/Home';

import { HOME } from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME}
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeStack;
