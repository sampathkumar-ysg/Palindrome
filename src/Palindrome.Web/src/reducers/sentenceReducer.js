import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sentenceReducer(state = initialState.sentences, action) {
  switch (action.type) {
    case types.LOAD_PALINDROME_SUCCESS:
      return action.sentences;

    case types.CREATE_PALINDROME_SUCCESS:
      return [
        ...state, action.sentence
      ];

    default:
      return state;
  }
}
