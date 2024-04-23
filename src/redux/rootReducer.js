import { combineReducers } from 'redux';
import loadingReducer from './AppLoader/appLoaderReducer';
import addTaskReducer from './task/addTaskReducer';


const reducers = combineReducers({
  loadingReducer: loadingReducer,
  addTaskReducer: addTaskReducer,
});

export const RootReducer = (state, action) => {
  //Reset Global state
  // if (action.type === '[Auth] LOGOUT_USER') {
  //   return reducers(undefined, action);
  // }

  return reducers(state, action);
};
