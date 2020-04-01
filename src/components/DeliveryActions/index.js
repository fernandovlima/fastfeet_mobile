import React from 'react';
import { View } from 'react-native';

import { Container, DeliveryActionsButtons } from './styles';

import DeliveryButton from '../DeliveryButton';

export default function DeliveryActions({ navigation }) {
  return (
    <Container>
      <DeliveryActionsButtons>
        <DeliveryButton
          name="close-o"
          color="#f00"
          size={40}
          label="Informar problema"
          page="InfoProblems"
        />
        <DeliveryButton
          name="exclamation"
          color="#E9DB30"
          size={40}
          label="Visualizar problemas"
          page="ViewProblems"
        />
        <DeliveryButton
          name="check"
          color="#7159c1"
          size={40}
          label="Confirmar entrega"
          page="ConfirmDelivery"
        />
      </DeliveryActionsButtons>
    </Container>
  );
}
