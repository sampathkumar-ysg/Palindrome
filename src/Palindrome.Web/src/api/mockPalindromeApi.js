import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const sentences = [
  "Was it a cat I saw?",
  "Don't nod",
  "Radar",
  "No lemon, no melon",
  "dad"
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class PalindromeApi {
  static getAllPalindromes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sentences));
      }, delay);
    });
  }

  static savePalindrome(sentence) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minSentenceTitleLength = 2;
        if (sentence.length < minSentenceTitleLength) {
          reject(`Sentence must be at least ${minSentenceTitleLength} characters.`);
        }
        sentences.push(sentence);
        resolve(sentence);
      }, delay);
    });
  }
}

export default PalindromeApi;
