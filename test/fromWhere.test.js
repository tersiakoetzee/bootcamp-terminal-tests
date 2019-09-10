let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("the town fromWhere a car comes function",function(){
    it("Should return registration number for that car and where it is from",function(){
        assert.equal(fromWhere("CY"), "Bellville");
    })
    it("should return that cars registration number to find the town its from", function(){
        assert.equal(fromWhere("CJ"), "Paarl");
    })
    it("should return a cars registration number and return the town the car is from", function(){
        assert.equal(fromWhere("CA"), "Cape Town");
    })
    it("if a registration is undefined it should return from some other place", function(){
        assert.equal(fromWhere(""), "Some other place!")
    });
})

