import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

import TabNavigator from './tabs.routes';

const AuthStack = createStackNavigator();

const Routes = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
export default Routes;
