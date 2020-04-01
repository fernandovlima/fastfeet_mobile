import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  DeliveryInfo,
  Header,
  HeaderTitle,
  Title,
  Info,
} from './styles';

export default function DeliveryInfoCard() {
  return (
    <Container>
      <DeliveryInfo>
        <Header>
          <Icon name="truck" color="#7159c1" size={20} />
          <HeaderTitle>Informações da entrega</HeaderTitle>
        </Header>
        <Title>Destinátario</Title>
        <Info>Fernando Lima</Info>
        <Title>Endereço de Entrega</Title>
        <Info>Rua da Paz, 1900 - Curitiba - PR - 80050-350</Info>
        <Title>Produto</Title>
        <Info>MacBook Pro</Info>
      </DeliveryInfo>
    </Container>
  );
}
