import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import {
  navigationRef,
  isMountedRef,
} from './services/navigation/RootNavigation';

import store from './store';

import './config/Reactotronconfig';
import Routes from './routes/routes';

export default function App() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
