import {ImageProps} from 'react-native';
import {AuthStack, AppStack, SplashStack} from '../constants/Screens';
import {MenuItemProps} from '../screens/Menu/types';

export type AppStackType = {
  [AppStack.Home]: undefined;
  [AppStack.Menu]: {
    image: ImageProps;
    title: string;
    rating: string;
    distance: string;
    location: string;
  };
  [AppStack.Cart]: {
    cart: MenuItemProps[];
  };
};

export type AuthStackType = {
  [AuthStack.Login]: undefined;
};

export type SplashStackType = {
  [SplashStack.Splash]: undefined;
};
