let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function", function () {

    it("should return true if registration starting with CJ from Paarl", function () {
        assert.equal(true, countAllPaarl("CJ 2345"));
        assert.equal(true, countAllPaarl("CJ 345 123"));
    });
    it("should return false if registration is not from Paarl", function () {
        assert.equal(false, countAllPaarl("CY 2345"));
    })

});