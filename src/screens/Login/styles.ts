import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {vw, vh} from '../../constants/Dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_FFFFFF,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: Colors.color_FFFFFF,
    paddingHorizontal: vw(20),
  },
  headerContainer: {
    marginTop: vh(30),
  },
  emailContainer: {
    marginTop: vh(105),
  },
  passwordContainer: {
    marginTop: vh(16),
  },
  buttonContainer: {
    marginTop: vh(30),
  },
  signUpContainer: {
    marginTop: vh(190),
    justifyContent: 'center',
    alignItems: 'center',
  },
  DontHaveText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.color_6C6C6C,
  },
  SignUpText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.color_1BAC4B,
  },
  forgetContainer: {
    marginTop: vh(10),
  },
});
