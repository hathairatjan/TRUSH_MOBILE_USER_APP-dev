import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainBottomTab from './MainBottomTab';
import {RoomDetailScreen} from '../../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTab"
        component={MainBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RoomDetailScreen"
        component={RoomDetailScreen}
        options={{presentation: 'card'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
