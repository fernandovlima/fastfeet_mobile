import React from 'react';
import { connect } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { signOut } from '../../store/modules/login/actions';

import {
  Container,
  Content,
  AvatarContainer,
  DetailsContent,
  Label,
  Detail,
  LogoutButton,
  ButtonText,
} from './styles';

function Profile({ dispatch, deliveryman }) {
  console.tron.log('del:', deliveryman.created_at);
  const logout = async () => {
    dispatch(signOut());
  };
  const newDate = parseISO(deliveryman.created_at);

  const dateFormatted = format(newDate, 'dd-MM-yyyy');
  console.tron.log(dateFormatted);
  return (
    <>
      {deliveryman ? (
        <Container>
          <Content>
            <AvatarContainer
              source={{
                uri: deliveryman.avatar.url,
              }}
            />
            <DetailsContent>
              <Label>nome completo</Label>
              <Detail>{deliveryman.name}</Detail>
              <Label>email</Label>
              <Detail>{deliveryman.email}</Detail>
              <Label>data de cadastro</Label>
              <Detail>{dateFormatted}</Detail>
            </DetailsContent>
            <LogoutButton onPress={logout}>
              <ButtonText>logout</ButtonText>
            </LogoutButton>
          </Content>
        </Container>
      ) : (
        <Detail>ERROR</Detail>
      )}
    </>
  );
}

//

const mapStateToProps = (state) => ({
  deliveryman: state.login.deliveryman,
});
export default connect(mapStateToProps)(Profile);
