const expect = require("chai").expect;
const { caesar } = require("../src/caesar")



//function caesar(input, shift, encode = true)

describe("caesar() - test written by Imani", () =>{

    // (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh")

    it ("should return false if no shift value is present",() => {
        const actual = caesar("Zebra Magazine")
        expect(actual).to.equal(false)
    });

    it ("should return false if shift value is less than -25",() => {
        const actual = caesar("Zebra Magazine",-50)
        expect(actual).to.equal(false)
    });

    it ("should return false if shift value is greater than 25",() => {
        const actual = caesar("Zebra Magazine",50)
        expect(actual).to.equal(false)
    });

    it ("should return false if shift value is equal to zero",() => {
        const actual = caesar("Zebra Magazine",0)
        expect(actual).to.equal(false)
    });

    it ("should maintain spaces and other non-alphabetic symbols",() => {
        const actual = caesar("zebra magazine",3)
        const expected = "cheud pdjdclqh"
        expect(actual).to.equal(expected)

    });

    it ("should wrap around to the beginning of the alphabet if the shift is beyond the alphabet",() => {
        const actual = caesar("zebra magazine",3)
        const expected = "cheud pdjdclqh"
        expect(actual).to.equal(expected)
    });
   
  it ("should ignore any capitalization of input",() => {
        const actual = caesar("ZEBRA MAGAZINE",3)
        const expected = "cheud pdjdclqh"
        expect(actual).to.equal(expected)
    });
  
  
  
});