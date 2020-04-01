export function loginRequest(id) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: id,
  };
}

export function loginSuccess(deliveryman) {
  return {
    type: '@login/LOGIN_SUCCESS',
    payload: deliveryman,
  };
}

export function loginFailure() {
  return {
    type: '@login/LOGIN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@login/LOGOUT',
  };
}
