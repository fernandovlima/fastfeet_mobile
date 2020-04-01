/* eslint-disable no-use-before-define */
import React from 'react';
import { Card } from 'react-native-shadow-cards';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Steps from '../ProgressSteps';

import {
  Container,
  Header,
  Title,
  Body,
  Footer,
  Content,
  Label,
  TextInfo,
  TextButton,
  DetailButton,
} from './styles';

export default function DeliveryCard({ navigation }) {
  function goToDetails() {
    navigation.navigate('Detalhes');
  }
  return (
    <Container>
      <Card style={{ padding: 10, margin: 10 }}>
        <Header>
          <Icon name="truck" size={18} color="#7159c1" />
          <Title>Encomenda 1</Title>
        </Header>
        <Body>
          <Steps />
        </Body>
        <Footer>
          <Content>
            <Label>Data</Label>
            <TextInfo>01/01/2020</TextInfo>
          </Content>
          <Content>
            <Label>Cidade</Label>
            <TextInfo>Curitiba</TextInfo>
          </Content>
          <DetailButton onPress={goToDetails}>
            <TextButton>ver detalhes</TextButton>
          </DetailButton>
        </Footer>
      </Card>
    </Container>
  );
}
