import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import {vw, vh} from '../../constants/Dimension';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: Colors.color_E3E7EC,
    borderWidth: 1,
    paddingHorizontal: vw(20),
  },
  input: {
    paddingVertical: vh(16),
    backgroundColor: Colors.color_FFFFFF,
    fontSize: 16,
    fontWeight: '500',
  },
  text14500: {
    fontSize: 14,
    fontWeight: '500',
  },
  secureButton: {},
  errorText: {
    color: Colors.color_FF0000,
    fontSize: 14,
    marginTop: vh(5),
  },
});
