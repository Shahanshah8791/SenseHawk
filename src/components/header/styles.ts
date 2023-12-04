import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {vw} from '../../constants/Dimension';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  titleContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.color_111111,
  },
  menuHeadeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {width: vw(50), height: vw(50), resizeMode: 'cover'},
});
