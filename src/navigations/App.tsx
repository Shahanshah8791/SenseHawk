import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStack} from '../constants/Screens';
import {Home} from '../screens/Home/Home';
import {Menu} from '../screens/Menu/Menu';
import {Cart} from '../screens/Cart/Cart';
import {AppStackType} from './types';

const AppStackNav = createNativeStackNavigator<AppStackType>();
const AppStackFunc = () => {
  return (
    <AppStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStackNav.Screen component={Home} name={AppStack.Home} />
      <AppStackNav.Screen component={Menu} name={AppStack.Menu} />
      <AppStackNav.Screen component={Cart} name={AppStack.Cart} />
    </AppStackNav.Navigator>
  );
};

export default AppStackFunc;
