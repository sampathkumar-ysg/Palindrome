import {combineReducers} from 'redux';
import sentences from './sentenceReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  sentences,
  ajaxCallsInProgress
});

export default rootReducer;
