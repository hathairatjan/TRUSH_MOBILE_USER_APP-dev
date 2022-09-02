import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckInScreen, HomeScreen} from '../../screens';

const BottomTab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="CheckInScreen" component={CheckInScreen} />
    </BottomTab.Navigator>
  );
};

export default MainBottomTab;
