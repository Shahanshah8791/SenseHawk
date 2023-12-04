import types from '../constants/Types';
const initialState = {
  isAppLoading: true,
  user: null,
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...prevState,
        user: action.user,
        isAppLoading: false,
      };

    case types.LOGOUT:
      return {
        ...prevState,
        user: null,
        isAppLoading: false,
      };

    default:
      return prevState;
  }
};
export default authReducer;
