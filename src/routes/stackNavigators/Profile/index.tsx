import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '~/modules/profile/views/Home';
import Header from '~/shared/components/Header';

import { PROFILE } from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={PROFILE}
      component={Profile}
      options={{
        header: () => <Header />,
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
