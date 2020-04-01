import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Delivery from '../components/Deliverys';
import Profile from '../components/Profile';
import DeliveryRoutes from './delivery.routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Entregas') {
          iconName = focused ? 'bars' : 'bars';
        } else if (route.name === 'Perfil') {
          iconName = focused ? 'user-circle' : 'user-circle-o';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#9159c1',
      inactiveTintColor: 'gray',

      labelStyle: {
        fontSize: 14,
      },
      style: {
        height: 100,
      },
    }}
  >
    <Tab.Screen name="Entregas" component={DeliveryRoutes} />
    <Tab.Screen name="Perfil" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
