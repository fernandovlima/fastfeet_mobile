import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

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

export default function Profile({ navigation }) {
  const [deliveryman, setDeliveryman] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userInAsyncStorage');

      if (value) {
        const man = JSON.parse(value);
        console.tron.log(`MAN: ${man}`);
        setDeliveryman(man);
        console.tron.log(`STATE: ${deliveryman}`);
      }
    } catch (error) {
      console.tron.log(`ERROR: ${error}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const logout = async () => {
    navigation.navigate('Login');
    await AsyncStorage.clear();
  };

  return (
    <>
      {deliveryman ? (
        <Container>
          <Content>
            <AvatarContainer
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
            />
            <DetailsContent>
              <Label>nome completo</Label>
              <Detail>{deliveryman.name}</Detail>
              <Label>email</Label>
              <Detail>{deliveryman.email}</Detail>
              <Label>data de cadastro</Label>
              <Detail>{deliveryman.createdAt}</Detail>
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
