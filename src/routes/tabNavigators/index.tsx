import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BOOK_TAB, PROFILE_TAB } from '~/shared/constants/routesNames';

import BottomTab from '~/routes/bootomTab';

import Navigators from '~/routes/stackNavigators';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
    <Tab.Screen
      name={BOOK_TAB}
      options={{ headerShown: false }}
      component={Navigators.Books}
    />
    <Tab.Screen
      name={PROFILE_TAB}
      options={{ headerShown: false }}
      component={Navigators.Profile}
    />
  </Tab.Navigator>
);

export default Tabs;
