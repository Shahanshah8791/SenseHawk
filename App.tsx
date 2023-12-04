import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import SplashStack from './src/navigations/Splash';
import AuthStack from './src/navigations/Auth';
import AppStack from './src/navigations/App';
import store from './src/store/store';
import {useAppSelector} from './src/utils/Hooks/Hooks';

function App() {
  const {isAppLoading, user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {isAppLoading ? <SplashStack /> : user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
