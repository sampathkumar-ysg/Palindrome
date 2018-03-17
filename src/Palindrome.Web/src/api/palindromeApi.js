import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const sentences = [];

const customHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

class PalindromeApi {

  static getPalindromes(resolve, reject) {
    fetch("http://localhost:23213/palindromes.api/palindromes", { method: 'GET', headers : customHeader })
    .then(res => res.json())
    .then(
          (response) =>{ resolve(Object.assign([], response)); },
          (error) => { reject(error); }
    );
   }

   static postPalindrome(resolve, reject, text) {
    fetch("http://localhost:23213/palindromes.api/palindrome/" + encodeURI(text), { method: 'POST', headers : customHeader })
    .then(
          (response) => { 
            if(response.status == 200)
            {
              resolve(response.json()); 
            }

            reject(`Not a palindrome`);
          }
    );
   }

  static getAllPalindromes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { PalindromeApi.getPalindromes(resolve, reject); }, delay);
    });
  }

  static savePalindrome(sentence) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minSentenceTitleLength = 2;
        if (sentence.length < minSentenceTitleLength) {
          reject(`Sentence must be at least ${minSentenceTitleLength} characters.`);
        }
        PalindromeApi.postPalindrome(resolve, reject, sentence);
      }, delay);
    });
  }
}

export default PalindromeApi;
