import { createAction } from 'redux-actions';

const OPEN_MODAL = 'App/Handle/OPEN_MODAL';
const CLOSE_MODAL = 'App/Handle/CLOSE_MODAL';

export const open_modal = createAction(OPEN_MODAL);
export const close_modal = createAction(CLOSE_MODAL);

const initialState = {
  isModal: false,
};

export default function Auth(state: any = initialState, action: any) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case CLOSE_MODAL:
      return {
         ...state,
         isModal: false,
      };
    default:
      return state;
  }
}
