import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { loginSuccess, loginFailure } from './actions';

export function* signIn({ payload, navigation }) {
  try {
    const { id } = payload;
    console.tron.log('ID em sagas: ', id);

    const response = yield call(api.get, `deliveryman/${id}`);

    console.tron.log('RESPONSE SAGAS: ', response);
    const deliveryman = response.data;

    yield put(loginSuccess(deliveryman));

    navigation.navigate('Main', {
      screen: 'Entregas',
      params: {
        screen: 'EntregasLista',
      },
    });
  } catch (error) {
    yield put(loginFailure());
  }
}

export function signOut({ navigation }) {
  navigation.navigate('Login');
}

export default all([
  takeLatest('@login/LOGIN_REQUEST', signIn),
  takeLatest('@login/LOGOUT', signOut),
]);
