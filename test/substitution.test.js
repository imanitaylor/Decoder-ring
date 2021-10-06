const expect = require("chai").expect
const { substitution} = require("../src/substitution");


// For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:

describe ("substitution() - test written by Imani", () => {

    it ("should return false if the given alphabet parameter isn't exactly 26 characters long", () => {
        const actual = substitution("message", "plmoknijbuhvygctfdsaxrdzeswaqasd");
        expect(actual).to.equal(false);
    });

    it ("should return false if there are duplicate characters in the given alphabet parameter. All characters should be unique.", () => {
        const actual = substitution("message", "plmoqnijbuhvygctfxrtzeswaq");
        expect(actual).to.equal(false);
    });

    it ("should maintain all spaces in the given input when encoding", () => {
        const actual = substitution("hello there", "plmoknijbuhvygctfxrdzeswaq",true)
        const expected = "jkvvc djkxk";
        expect(actual).to.equal(expected);

    });

    it ("should maintain all spaces in the given input when decoding", () => {
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq",false)
        const expected = "message";
        expect(actual).to.equal(expected);

    });

    it ("should ignore any capitaliation in the given input", () => {
        const actual = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq",true)
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);

    });


    it ("should correctly translate the given input, based on the given alphabet", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq",true)
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);

    });

});


