import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageProps} from 'react-native';
import {AppStackType} from '../../navigations/types';

export interface RestaurantProps {
  image: ImageProps;
  title: string;
  rating: string;
  distance: string;
  location: string;
}

export type CartScreenProps = NativeStackScreenProps<AppStackType, 'Cart'>;

export type CartScreentNavigationType = CartScreenProps['navigation'];

export type CartScreenRouteType = CartScreenProps['route'];
