import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  deliveryman: null,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@login/LOGIN_REQUEST': {
        draft.id = action.payload.id;
        draft.loading = true;
        break;
      }
      case '@login/LOGIN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;

        break;
      }
      case '@login/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@login/SIGN_OUT': {
        draft.deliveryman = null;

        break;
      }
      default:
    }
  });
}
