let assert = require("assert");
let isWeekDay = require("../isWeekday");

describe("The isWeekDay function", function () {

    it("should return true if day is a weekday", function () {
        assert.equal(true, isWeekDay("Monday"));
    });

    it("should return false if day is weekend", function () {
        assert.equal(false, isWeekDay("Saturday"));
    })
})
