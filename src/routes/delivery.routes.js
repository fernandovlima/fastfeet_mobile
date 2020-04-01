import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Deliverys from '../components/Deliverys';
import DeliveryDetails from '../pages/DeliveryDetails';
import InfoProblems from '../pages/InfoProblems';
import ViewProblems from '../pages/ViewPreoblems';
import ConfirmDelivery from '../pages/ConfirmDelivery';

const DeliveryNav = createStackNavigator();

const DeliveryRoutes = () => {
  return (
    <DeliveryNav.Navigator
      initialRouteName="EntregasLista"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
          height: 120,
        },
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
      }}
    >
      <DeliveryNav.Screen
        name="EntregasLista"
        component={Deliverys}
        options={{ headerShown: false }}
      />
      <DeliveryNav.Screen
        name="Detalhes"
        component={DeliveryDetails}
        options={{ title: 'detalhes da encomenda' }}
      />
      <DeliveryNav.Screen
        name="InfoProblems"
        component={InfoProblems}
        options={{ title: 'informe um problema' }}
      />
      <DeliveryNav.Screen
        name="ViewProblems"
        component={ViewProblems}
        options={{ title: 'visualizar problemas' }}
      />
      <DeliveryNav.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{ title: 'confirmar entrega' }}
      />
    </DeliveryNav.Navigator>
  );
};
export default DeliveryRoutes;
