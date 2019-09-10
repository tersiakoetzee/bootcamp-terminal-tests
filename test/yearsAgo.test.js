let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('how many years ago was that' , function(){
    
    it('should return how many years ago it was' , function(){
        assert.equal(yearsAgo(2000),19);

    });
    it('should return exact years ago it was' , function(){
        assert.equal(yearsAgo(1995),24)

})
})
