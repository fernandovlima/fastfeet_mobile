import { takeLatest, call, put, all } from 'redux-saga/effects';

import * as RootNavigation from '../../../services/navigation/RootNavigation';
import api from '../../../services/api';

import { loginSuccess, loginFailure } from './actions';

export function* signIn({ payload }) {
  console.tron.log('porra: ', payload);

  try {
    const { id } = payload;
    console.tron.log('ID em sagas: ', id);

    const response = yield call(api.get, `deliveryman/${id}`);

    console.tron.log('RESPONSE SAGAS: ', response);
    const deliveryman = response.data;
    console.tron.log('deliveryman em SAGAS: ', deliveryman);

    yield put(loginSuccess(deliveryman));

    RootNavigation.navigate('Main');
  } catch (error) {
    yield put(loginFailure());
  }
}

export function signOut() {
  RootNavigation.navigate('Login');
}

export default all([
  takeLatest('@login/LOGIN_REQUEST', signIn),
  takeLatest('@login/LOGOUT', signOut),
]);
