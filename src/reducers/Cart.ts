import types from '../constants/Types';
const initialState = {
  cartId: null,
  cart: [],
};

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CART:
      return {
        ...prevState,
        cartId: action.cartId,
        cart: action.cart,
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
export default cartReducer;
