import { createAction } from 'redux-actions';

// const SET_TOKEN = 'App/Auth/SET_TOKEN';
const SIGN_IN = 'App/Auth/SIGN_IN';

// export const setToken = createAction(SET_TOKEN);
// payload: {token: token}
export const sign_in = createAction(SIGN_IN);

const initialState = {
  // token: null,
  isAdmin: false,
};

export default function Auth(state: any = initialState, action: any) {
  switch (action.type) {
    // case SET_TOKEN:
    //   return {
    //     ...state,
    //     token: action.payload.token,
    //   };
    case SIGN_IN:
      return {
        ...state,
        isAdmin: true,
      };

    default:
      return state;
  }
}
