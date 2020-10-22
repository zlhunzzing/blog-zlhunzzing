import { createAction } from 'redux-actions';

const SET_TITLE = 'App/Info/SET_TITLE';
const SET_INTRO = 'App/Info/SET_INTRO';

export const set_title = createAction(SET_TITLE);
// payload: {title: title <string>}
export const set_intro = createAction(SET_INTRO)


const initialState = {
  title: '',
  intro: ''
};

export default function Info(state: any = initialState, action: any) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case SET_INTRO:
      return {
        ...state,
        intro: action.payload.intro,
      };
    default:
      return state;
  }
}
