import * as types from './actionTypes';
import palindromeApi from '../api/palindromeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPalindromesSuccess(sentences) {
  return { type: types.LOAD_PALINDROME_SUCCESS, sentences};
}

export function createPalindromeSuccess(sentence) {
  return {type: types.CREATE_PALINDROME_SUCCESS, sentence};
}

export function loadSentences() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return palindromeApi.getAllPalindromes().then(sentences => {
      dispatch(loadPalindromesSuccess(sentences));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveSentence(sentence) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return palindromeApi.savePalindrome(sentence).then(sentence => {
        dispatch(createPalindromeSuccess(sentence));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
