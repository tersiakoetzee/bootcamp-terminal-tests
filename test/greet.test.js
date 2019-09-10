let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Twilight correctly', function(){
        assert.equal('Hello, Twilight', greet('Twilight'));
    });
    it('should greet Titus correctly', function(){
        assert.equal('Hello, Titus', greet('Titus'));
    });
});