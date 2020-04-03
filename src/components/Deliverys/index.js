import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { signOut } from '../../store/modules/login/actions';

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

function Deliverys({ navigation, deliveryman, dispatch }) {
  const logout = async () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <DeliverymanContent>
        <Avatar
          source={{
            uri: deliveryman.avatar.url,
          }}
        />
        <TextContent>
          <WelcomeMessage>bem vindo de volta,</WelcomeMessage>
          <DeliverymanName>{deliveryman.name}</DeliverymanName>
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

const mapStateToProps = (state) => ({
  deliveryman: state.login.deliveryman,
});

export default connect(mapStateToProps)(Deliverys);
