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
    paddingTop: vh(20),
  },
  restListContainer: {flex: 1, marginTop: vh(20)},
  seperator: {
    height: vh(10),
  },
  menuHeaderContainer: {
    paddingVertical: vh(10),
  },
  menuHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.color_1BAC4B,
  },
  cartButtonContainer: {
    marginVertical: vh(10),
  },
});
