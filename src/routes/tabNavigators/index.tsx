import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HOME, PROFILE } from '~/shared/constants/routesNames';

import BottomTab from '~/routes/bootomTab';

import Navigators from '~/routes/stackNavigators';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
    <Tab.Screen name={HOME} component={Navigators.Home} />
    <Tab.Screen name={PROFILE} component={Navigators.Profile} />
  </Tab.Navigator>
);

export default Tabs;
