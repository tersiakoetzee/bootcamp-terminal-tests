let assert = require("assert");
let countRegNumber = require("../countAllPaarl");

describe("countRegNumber for that town function", function () {

    it("should return all registrations for that particular town  ", function () {
        assert.equal(countRegNumber("CL 124,CL 345, CL 341,CL "), "");
    });
    it("should return the number of registrations for that town", function () {
        assert.equal(countRegNumber('CL 345,CL 341'), "");
    })
})