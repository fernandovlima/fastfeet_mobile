import React from 'react';
import { connect } from 'react-redux';

import DeliveryInfoCard from '../../components/DeliveryInfoCard';
import DeliveryStatusCard from '../../components/DeliveryStatusCard';
import DeliveryActions from '../../components/DeliveryActions';

import { Container } from './styles';

function DeliveryDetails() {
  return (
    <Container>
      <DeliveryInfoCard />
      <DeliveryStatusCard />
      <DeliveryActions />
    </Container>
  );
}
export default connect()(DeliveryDetails);
