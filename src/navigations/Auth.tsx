import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStack} from '../constants/Screens';
import {Login} from '../screens/Login/Login';
import {AuthStackType} from './types';

const AuthStackNav = createNativeStackNavigator<AuthStackType>();
const AuthStackFunc = () => {
  return (
    <AuthStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNav.Screen component={Login} name={AuthStack.Login} />
    </AuthStackNav.Navigator>
  );
};

export default AuthStackFunc;
