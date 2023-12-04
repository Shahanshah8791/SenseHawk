import auth from '@react-native-firebase/auth';

import store from '../store/store';
import {wipeStorage} from '../utils/AsyncStorage/Asyncstorage';
import {Dispatch} from 'redux';
import Types from '../constants/Types';

export const checkIfUserAlreadyLoggedInFromFirebase = () => {
  return async (dispatch: Dispatch) => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: Types.SET_USER,
          user: user,
        });
      } else {
        dispatch({
          type: Types.LOGOUT,
        });
      }
    });
  };
};

export const login = (
  email: string,
  password: string,
  errorCallback: Function,
) => {
  return async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        store.dispatch(checkIfUserAlreadyLoggedInFromFirebase());
      })
      .catch(err => {
        errorCallback();
        console.log(err);
      });
  };
};

export const logout = () => {
  return async () => {
    auth()
      .signOut()
      .then(() => {
        wipeStorage().then(() => {
          store.dispatch(checkIfUserAlreadyLoggedInFromFirebase());
        });
      });
  };
};
