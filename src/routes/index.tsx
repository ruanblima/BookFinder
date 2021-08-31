import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './tabNavigators';
import Login from '~/shared/views/Login';

import { HOME_TAB, LOGIN_SCREEN } from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
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
            name={HOME_TAB}
            component={Tabs}
            options={{ title: 'Home', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
