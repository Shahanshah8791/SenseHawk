import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers/reducers';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});
const initialState = {};
const middlewareData = [thunk, loggerMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewareData)),
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
