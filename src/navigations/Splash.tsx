import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashStack} from '../constants/Screens';
import {Splash} from '../screens/Splash/Splash';
import {SplashStackType} from './types';

const SplashStackNav = createNativeStackNavigator<SplashStackType>();
const SplashStackFunc = () => {
  return (
    <SplashStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SplashStackNav.Screen component={Splash} name={SplashStack.Splash} />
    </SplashStackNav.Navigator>
  );
};

export default SplashStackFunc;
