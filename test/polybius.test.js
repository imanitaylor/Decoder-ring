const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

// For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:

// const actual = caesar("Zebra Magazine",3)
// const expected = "cheud pdjdclqh"
// expect(actual).to.equal(expected)


describe("polybius() - test written by Imani", () => {

it ("should translate both the letters i and j to 42 when encoding", () =>{ 
    const actual = polybius("jumanji",true);
    const expected = "42542311334242";
    expect(actual).to.equal(expected);
});

it("should translate the number 42 to (i/j) when decoding", () => {
    const actual = polybius("4223113342",false);
    const expected = "i/jmani/j";
    expect(actual).to.equal(expected)
});

it ("should ignore all capitalization from the input", () => {
    const actual = polybius("IMANI");
    const expected = "4223113342";
    expect(actual).to.equal(expected);

});

it ("should maintain spaces in the input message when encoding", () => {
    const actual = polybius("imani taylor");
    const expected = "4223113342 441145134324";
    expect(actual).to.equal(expected);

});

it ("should maintain spaces in the input message when decoding", () => {
    const actual = polybius("4223113342 441145134324", false);
    const expected = "i/jmani/j taylor";
    expect(actual).to.equal(expected);

});

});

