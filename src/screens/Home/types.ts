import {ImageProps} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackType} from '../../navigations/types';

export interface RestaurantProps {
  image: ImageProps;
  title: string;
  rating: string;
  distance: string;
  location: string;
}

export type HomeScreenProps = NativeStackScreenProps<AppStackType, 'Home'>;

export type HomeScreentNavigationType = HomeScreenProps['navigation'];

export type CreateAccountRouteType = HomeScreenProps['route'];
