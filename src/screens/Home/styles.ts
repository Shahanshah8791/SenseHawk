import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {vw, vh} from '../../constants/Dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_F8F8F8,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: Colors.color_F8F8F8,
    paddingHorizontal: vw(20),
  },
  headerContainer: {
    paddingVertical: vh(10),
  },
  restListContainer: {flex: 1},
  seperator: {
    height: vh(10),
  },
});
