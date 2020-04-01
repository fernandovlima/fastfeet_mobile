import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  DeliverymanContent,
  Avatar,
  TextContent,
  WelcomeMessage,
  DeliverymanName,
  LogoutButton,
  ListContent,
  List,
  TopActions,
  Title,
  ButtonContent,
  PendButton,
  DeliveredButton,
  TextButton,
} from './styles';

import Card from '../DeliveryCard';

export default function Deliverys({ route, navigation }) {
  const { name } = route.params;

  const logout = async () => {
    navigation.navigate('Login');
    await AsyncStorage.clear();
  };

  return (
    <Container>
      <DeliverymanContent>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
          }}
        />
        <TextContent>
          <WelcomeMessage>bem vindo de volta,</WelcomeMessage>
          <DeliverymanName>{name}</DeliverymanName>
        </TextContent>
        <LogoutButton onPress={logout} activeOpacity={0.5}>
          <Icon name="sign-out" size={30} color="#ff0000" />
        </LogoutButton>
      </DeliverymanContent>
      <TopActions>
        <Title>Entregues</Title>
        <ButtonContent>
          <PendButton>
            <TextButton>Pendendes</TextButton>
          </PendButton>
          <DeliveredButton>
            <TextButton>Entregues</TextButton>
          </DeliveredButton>
        </ButtonContent>
      </TopActions>

      <ListContent>
        <List>
          <Card navigation={navigation} />
          <Card navigation={navigation} />
          <Card />
          <Card />
        </List>
      </ListContent>
    </Container>
  );
}
