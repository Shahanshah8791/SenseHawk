import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_FFFFFF,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: Colors.color_FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '10%',
    resizeMode: 'contain',
  },
});
