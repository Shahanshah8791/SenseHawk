import {combineReducers} from 'redux';

import authReducer from './Auth';
import cartReducer from './Cart';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
export default rootReducer;
