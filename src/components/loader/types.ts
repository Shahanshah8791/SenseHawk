type LoaderSize = 'small' | 'large';
import Colors from '../../constants/Colors';

export interface LoaderProps {
  size?: LoaderSize;
  color?: keyof typeof Colors;
}
