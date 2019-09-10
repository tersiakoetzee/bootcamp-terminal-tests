let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("the total data PhoneBill function", function () {

    it("should return total used on sms'", function () {
        assert.equal(totalPhoneBill("sms, sms, sms"), "R1.95");

    })
    it("should return total bill for calls used", function () {
        assert.equal(totalPhoneBill("call, call"), "R5.50")

    })
    it("should return total for all the data used", function () {
        assert.equal(totalPhoneBill("sms, sms, sms, call, call"), "R7.45");

    });
})
