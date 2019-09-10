let assert = require("assert");
let findItemsOver20 = require("../findItemOver20");

describe("the findItemsOver20 function", function () {

    it("should return if items have a quantity is more than 20", function () {
        assert.deepEqual(findItemsOver20([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 }
        ]), [{ name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27 }]);
    });

    it("should return if any items have a quantity that  is more than 20", function () {
        assert.deepEqual(findItemsOver20([
            { name: 'pears', qty: 5 },
            { name: 'bananas', qty: 18 },
        ]), []);
    });
});
