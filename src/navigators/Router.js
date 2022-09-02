import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '../contexts/AuthProvider';

import MainStack from './components/MainStack';
import AuthStack from './components/AuthStack';

const Router = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user !== null ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
