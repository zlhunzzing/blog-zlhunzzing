import { combineReducers } from 'redux';
import Auth from './Auth';
import Handle from './Handle'
import Info from './Info'

const reducers = combineReducers({
  Auth,
  Handle,
  Info
});

export default reducers;
