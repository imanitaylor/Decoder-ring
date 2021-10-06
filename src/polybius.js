// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    let encodingArr = [
      { letter: "a", number: 11 },
      { letter: "b", number: 21 },
      { letter: "c", number: 31 },
      { letter: "d", number: 41 },
      { letter: "e", number: 51 },
      { letter: "f", number: 12 },
      { letter: "g", number: 22 },
      { letter: "h", number: 32 },
      { letter: "i/j", number: 42 },
      { letter: "i", number: 42 },
      { letter: "j", number: 42 },
      { letter: "k", number: 52 },
      { letter: "l", number: 13 },
      { letter: "m", number: 23 },
      { letter: "n", number: 33 },
      { letter: "o", number: 43 },
      { letter: "p", number: 53 },
      { letter: "q", number: 14 },
      { letter: "r", number: 24 },
      { letter: "s", number: 34 },
      { letter: "t", number: 44 },
      { letter: "u", number: 54 },
      { letter: "v", number: 15 },
      { letter: "w", number: 25 },
      { letter: "x", number: 35 },
      { letter: "y", number: 45 },
      { letter: "z", number: 55 },
      { letter: " ", number: " " },
    ];

    if (encode) {
      //turn entire string to lower case
      let lowCaseInput = input.toLowerCase();
      //create array from string
      let inputArr = Array.from(lowCaseInput);
      let newArr = [];
      //loop to look at each char in new array from the string
      for (let i = 0; i < inputArr.length; i++) {
        //if char is a a-z
        if (inputArr[i].match(/[a-z]/)) {
          //use .find to compare the char and finding this character in the encodedArr
          let found = encodingArr.find((item) => inputArr[i] === item.letter);
          newArr.push(found.number);
        }
        //if character is not a-z, a space
        else {
          newArr.push(inputArr[i]);
        }
      }
      return newArr.join("");
    }

    if (!encode) {
      //counts the digits in the input first. If digits are odd, returns false. if even
      //then goes to else and completes the decoding
      let counter = 0;
      for (let i = 0; i < input.length; i++) {
        //if the char of input is a number 0-9
        if (input[i].match(/[0-9]/)) {
          counter++;
        }
      }
      // if the number is odd return false
      if (counter % 2 != 0) return false;
      else {
        let codedNumsArr = input.match(/[\S]{2}|[\s]{1}/g);

        let newArr = [];

        for (let i = 0; i < codedNumsArr.length; i++) {
          //use .find to compare the char and finding this character in the encodedArr
          let found = encodingArr.find(
            (item) => codedNumsArr[i] == item.number
          );
          newArr.push(found.letter);
        }
        return newArr.join("");
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

