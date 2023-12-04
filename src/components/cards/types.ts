import {ImageProps} from 'react-native';

export interface RestaurantProps {
  onPressRest?: () => void;
  restImage: ImageProps;
  restTitle: string;
  restRating: string;
  restDist: string;
  restLoc: string;
}

export interface MenuProps {
  onPressAdd?: () => void;
  onPressRemove?: () => void;
  menuImage: ImageProps;
  menuTitle: string;
  addedCount: number;
  price: number;
}
