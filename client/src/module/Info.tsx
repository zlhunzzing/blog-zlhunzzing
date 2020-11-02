import { createAction } from 'redux-actions';

const SET_TITLE = 'App/Info/SET_TITLE';
const SET_INTRO = 'App/Info/SET_INTRO';
const SET_CATEGORY = 'App/Info/SET_CATEGORY';
const SET_POSTS = 'App/Info/SET_POSTS';
const SET_POSTS_RANGE = 'App/Info/SET_POSTS_RANGE';

export const set_title = createAction(SET_TITLE);
// payload: { title: title <string> }
export const set_intro = createAction(SET_INTRO)
export const set_category = createAction(SET_CATEGORY)
// payload: { category: [{ name: '' }, ...] <Array<Category> } / interface Category { name: string }
export const set_posts = createAction(SET_POSTS)
// payload: { posts: [{ id, title, content, ,createdAt, updatedAt }, ...] <Array<Post> }
export const set_posts_range = createAction(SET_POSTS_RANGE)

const initialState = {
  title: '',
  intro: '',
  category: [{ id: 1, name: 'list1' },],
  posts: [
    [
      {
        id: 1,
        title: '글1',
        content: '내용',
        createdAt: '',
        updatedAt: '',
      },
    ],
  ],
  postsRange: [
    [1, 2, 3],
  ]
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
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      }
    case SET_POSTS_RANGE:
      return {
        ...state,
        postsRange: action.payload.postsRange,
      }
    default:
      return state;
  }
}
