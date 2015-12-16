import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import counter from './counter';
import resumeReducer from './resumeReducer';
import titleBarReducer from './titleBarReducer';
import validationReducer from './validationReducer';


export default combineReducers({
  counter,
  resumeReducer,
  titleBarReducer,
  validationReducer,
  router: routerStateReducer
});
