import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';

import Tabs from './tabNavigators';
import Login from '~/shared/views/Login';

import { LOGIN_SCREEN, TABS_SCREEN } from '~/shared/constants/routesNames';
import Header from '~/shared/components/Header';

import { createTheme } from '~/shared/utils/theme';
import { ApplicationState } from '~/shared/store';

const StackLogin = createStackNavigator();
const StackHome = createStackNavigator();

const RootStack: React.FC = () => {
  const { theme } = useSelector((state: ApplicationState) => state.theme);
  const { isLogged } = useSelector((state: ApplicationState) => state.user);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ThemeProvider theme={createTheme(theme)}>
        <NavigationContainer>
          {isLogged ? (
            <StackHome.Navigator
              initialRouteName={TABS_SCREEN}
              screenOptions={{
                gestureEnabled: false,
                animationEnabled: false,
              }}>
              <StackHome.Screen
                name={TABS_SCREEN}
                component={Tabs}
                options={{
                  header: () => <Header />,
                }}
              />
            </StackHome.Navigator>
          ) : (
            <StackLogin.Navigator
              initialRouteName={LOGIN_SCREEN}
              screenOptions={{
                gestureEnabled: false,
                animationEnabled: false,
              }}>
              <StackLogin.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{
                  header: () => <Header />,
                }}
              />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default RootStack;
