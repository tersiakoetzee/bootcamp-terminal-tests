let assert = require("assert");
let isFromCapeTown = require("../countAllFromTown");

describe("count all the registrations for that town function",function(){
    it("should return  from Cape Town if registration starts with CA'",function(){
        assert.equal(isFromCapeTown("CA"), true);

    });
    it("should return  from Cape Town if registration starts with CA'",function(){
        assert.equal(isFromCapeTown("CA 123-456"), true);
})
})  