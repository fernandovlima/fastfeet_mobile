import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, Alert, Keyboard } from 'react-native';

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
