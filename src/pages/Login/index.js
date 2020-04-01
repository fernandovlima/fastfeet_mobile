import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Alert, Keyboard } from 'react-native';
import { loginRequest } from '../../store/modules/login/actions';
// import AsyncStorage from '@react-native-community/async-storage';

// import api from '../../services/api';

import {
  Container,
  Logo,
  Form,
  Input,
  SubmitButton,
  TextButton,
} from './styles';

import logo from '../../assets/fastfeet-logo.png';

function Login({ state, dispatch, navigation }) {
  const [id, setId] = useState('');
  const { loading } = state;
  // const [deliveryman, setDeliveryman] = useState({});

  // // function navigateToMain(user) {
  //   const { name, email } = user;

  //   navigation.navigate('Main', {
  //     screen: 'Entregas',
  //     params: {
  //       screen: 'EntregasLista',
  //       params: {
  //         name,
  //         email,
  //         avatarUrl: user.avatar_url,
  //       },
  //     },
  //   });
  // }

  // async function getDeliveryMan() {
  //   const response = await api.get(`/deliveryman/${id}`);

  //   if (response) {
  //     const deliveryMan = {
  //       id: response.data.id,
  //       name: response.data.name,
  //       email: response.data.email,
  //       avatarUrl: response.data.avatar.url,
  //       createdAt: response.data.created_at,
  //     };

  //     setDeliveryman(deliveryMan);

  //     return new Promise((resolve) => {
  //       resolve(deliveryMan);
  //     });
  //   }
  //   return response;
  // }

  // const setUserToAsyncStorage = async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       'userInAsyncStorage',
  //       JSON.stringify(deliveryman)
  //     );
  //   } catch (e) {
  //     console.tron.log('Erro.');
  //   }

  //   console.tron.log('SetItem OK.');
  // };

  async function handleSubmit() {
    dispatch(loginRequest(id));
    if (!id) {
      Alert.alert(
        'ATENÇÃO',
        'Por favor, preencha sua ID.',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false }
      );
    } else {
      // setLoading(true);
      // getDeliveryMan()
      //   .then((result) => {
      //     navigateToMain(result);
      //     setLoading(false);
      //   })
      //   .catch(() => {
      //     Alert.alert(
      //       'ATENÇÃO',
      //       'Por favor, insira um ID válida.',
      //       [{ text: 'OK', onPress: () => {} }],
      //       { cancelable: false }
      //     );
      //     setLoading(false);
      //   });
      console.tron.log('ID: ', id);

      dispatch(loginRequest({ id }));

      console.tron.log('STATE:', state);
      Keyboard.dismiss();
      setId('');
    }
  }
  return (
    <Container>
      <Form>
        <Logo source={logo} />
        <Input
          name="id"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          onChangeText={(text) => setId(text)}
          value={id}
        />
        <SubmitButton onPress={handleSubmit}>
          <TextButton>
            {loading ? 'processando ...' : 'entrar no sistema'}
          </TextButton>
        </SubmitButton>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Login);
