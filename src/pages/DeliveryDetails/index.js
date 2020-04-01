import React from 'react';

import DeliveryInfoCard from '../../components/DeliveryInfoCard';
import DeliveryStatusCard from '../../components/DeliveryStatusCard';
import DeliveryActions from '../../components/DeliveryActions';

import { Container } from './styles';

export default function DeliveryDetails() {
  return (
    <Container>
      <DeliveryInfoCard />
      <DeliveryStatusCard />
      <DeliveryActions />
    </Container>
  );
}
