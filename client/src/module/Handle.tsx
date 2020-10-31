import { createAction } from 'redux-actions';
import moment from "moment";

const OPEN_MODAL = 'App/Handle/OPEN_MODAL';
const CLOSE_MODAL = 'App/Handle/CLOSE_MODAL';

export const open_modal = createAction(OPEN_MODAL);
export const close_modal = createAction(CLOSE_MODAL);

const initialState = {
  isModal: false,
  momenter: (time: any, format: string) => {
    // foramt example : "YYYY.MM.DD HH:mm"
    return moment(new Date(time)).format(format);
  },
};

export default function Handle(state: any = initialState, action: any) {
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
