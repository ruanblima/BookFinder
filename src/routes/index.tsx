import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './tabNavigators';
import Login from '~/shared/views/Login';

import { LOGIN_SCREEN, TABS_SCREEN } from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

const RootStack: React.FC = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LOGIN_SCREEN}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={TABS_SCREEN}
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default RootStack;
