import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListBooks from '~/modules/Books/views/ListBooks';
import BookInformation from '~/modules/Books/views/BookInformation';
import Header from '~/shared/components/Header';

import {
  LIST_BOOK_SCREEN,
  BOOKS_INFORMATION_SCREEN,
} from '~/shared/constants/routesNames';

const Stack = createStackNavigator();

const BookStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={LIST_BOOK_SCREEN}
      component={ListBooks}
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

export default BookStack;
