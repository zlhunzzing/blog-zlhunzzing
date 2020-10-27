import { createAction } from 'redux-actions';

const SET_TITLE = 'App/Info/SET_TITLE';
const SET_INTRO = 'App/Info/SET_INTRO';
const SET_CATEGORY = 'App/Info/SET_CATEGORY';

export const set_title = createAction(SET_TITLE);
// payload: {title: title <string>}
export const set_intro = createAction(SET_INTRO)
export const set_category = createAction(SET_CATEGORY)
// payload: {category: [{ name: '' }, ...] <Array<Category>} / interface Category { name: string }


const initialState = {
  title: '',
  intro: '',
  category: [{ name: 'list1' }, { name: 'list2' }]
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
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    default:
      return state;
  }
}
