import { combineReducers } from 'redux';
import { GlobalReducer } from './GlobalReducer';

export default combineReducers({
  globalData: GlobalReducer,
});
