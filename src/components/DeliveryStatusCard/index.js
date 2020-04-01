import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  DeliveryInfo,
  Header,
  HeaderTitle,
  Dates,
  DataContent,
  Title,
  Info,
} from './styles';

export default function DeliveryStatusCard() {
  return (
    <Container>
      <DeliveryInfo>
        <Header>
          <Icon name="calendar" size={20} color="#7159c1" />
          <HeaderTitle>Situação da entrega</HeaderTitle>
        </Header>
        <Title>Status</Title>
        <Info>Pendente</Info>
        <Dates>
          <DataContent>
            <Title>data de retirada</Title>
            <Info>10 / 10 / 2020</Info>
          </DataContent>
          <DataContent>
            <Title>data de entrega</Title>
            <Info>-- / -- / --</Info>
          </DataContent>
        </Dates>
      </DeliveryInfo>
    </Container>
  );
}
