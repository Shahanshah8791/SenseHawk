import {ImageProps, SectionListData} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackType} from '../../navigations/types';

export interface MenuItemProps {
  name: string;
  addedCount: number;
  image: ImageProps;
  price: number;
  id: string;
}
export interface CartMenuItemProps {
  name: string;
  addedCount: number;
  image: ImageProps;
  price: number;
  id: string;
  cuisineTitle: string;
}
export type Section = {
  title: string;
  data: readonly MenuItemProps[];
};
export interface MenuHeaderProps {
  section: SectionListData<MenuItemProps, Section>;
}

export type MenuScreenProps = NativeStackScreenProps<AppStackType, 'Menu'>;

export type MenuScreentNavigationType = MenuScreenProps['navigation'];

export type MenuScreenRouteType = MenuScreenProps['route'];
