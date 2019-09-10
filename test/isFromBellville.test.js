let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("The isFromBellville function", function () {

    it("should return true if the registration is from Bellville", function () {
        assert.equal(true, isFromBellville("CY 123-123"));
    });

    it("should return false if the registration is not from Bellville", function () {
        assert.equal(false, isFromBellville("CA 123-123"));
    });

}); 