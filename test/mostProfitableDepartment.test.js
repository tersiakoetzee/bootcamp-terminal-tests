let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe("the mostProfitableDepartment function", function () {

    it("Should return  the most profitable department ", function () {
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"},{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"}]), "hardware");
    })

    it("should return false for the least profitable department", function () {
        assert.equal(false, mostProfitableDepartment("hardware department"));

    })
}) 
