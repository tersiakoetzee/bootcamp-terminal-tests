let assert = require("assert");
let regCheck = require("../regCheck");

describe("the regCheck function", function () {

    it("Should return from Western Cape if registration starts with location'", function () {
        assert.equal(true, regCheck("CY 567", 'CY'));
    });
    it("Should return false for if registration ends with location'", function () {
        assert.equal(false, regCheck("BBC 123 GP", 'GP'));
    })


})