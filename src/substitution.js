// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    let normAlphabet = "abcdefghijklmnopqrstuvwxyz";

    //if no alphabet parameter is given, or its over or under 26
    if (!alphabet || alphabet.length != 26) return false;

    //check to see if the alphabet contains only unique letters
    //loops through twice, the first loop char will check to see if it
    //equals the second loop char, if it does then false is returned
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    //makes sure that the input is all lowercase, ignoring capitalization
    let lowCaseInput = input.toLowerCase();
    //create array from string
    let inputArr = Array.from(lowCaseInput);
    let codeAlphabet = Array.from(alphabet);
    let encodingArr = [];

    if (encode) {
      //go trough input and for each letter find equivalent in the normal alphabet, and then based on number from indexOf find its equivalent in the coded alphabet
      let newArr = [];
      for (let i = 0; i < lowCaseInput.length; i++) {
        if (inputArr[i].match(/[a-z]/)) {
          let normalAlphabetIndex = normAlphabet.indexOf(lowCaseInput[i]);
          newArr.push(alphabet[normalAlphabetIndex]);
        } else {
          newArr.push(lowCaseInput[i]);
        }
      }
      return newArr.join("");
    } else if (!encode) {
      let newArr = [];
      for (let i = 0; i < lowCaseInput.length; i++) {
        if (inputArr[i] == " ") {
          newArr.push(lowCaseInput[i]);
        } else {
          let codeAlphabetIndex = alphabet.indexOf(lowCaseInput[i]);
          newArr.push(normAlphabet[codeAlphabetIndex]);
        }
      }
      return newArr.join("");
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

