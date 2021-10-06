// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift, encode = true) {
    // your solution code here
     if (!shift || shift === 0 || shift < -25 || shift > 25) return false ;
    if (!encode) shift *= -1;

    //turn entire string to lower case
    let lowCaseInput = input.toLowerCase();    
    //create array from string
    let inputArr = Array.from(lowCaseInput);   
  let newArr = [];
  for (let i = 0; i < inputArr.length; i++) {
            //if character is a-z
      if (inputArr[i].match(/[a-z]/)){
            //use .charCodeAt to turn letter into unicode
            let charNumCode = (inputArr[i].charCodeAt());
           // subtract or add shift
             charNumCode += shift;
        //if new number is > 122 subtract 26
        if (charNumCode > 122){
            charNumCode -= 26
        }          
         if (charNumCode < 97){
            charNumCode += 26
        }
     newArr.push(charNumCode)
            }
            else {
              newArr.push(inputArr[i])
            }
      };  
   let stringArr = [];    
    for (let i = 0; i < newArr.length; i++) {
      if (Number.isInteger(newArr[i])) {
        //use fromCharCode to turn number into letter
        let numToChar = String.fromCharCode(newArr[i]);
        stringArr.push(numToChar);
      } else {
        stringArr.push(newArr[i]);
      }
    }
  return(stringArr.join(''));

    
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

