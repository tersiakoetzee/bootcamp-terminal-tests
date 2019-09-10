let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("the findItemsOver function", function () {

    it("Should return quantity of items left over 25", function () {
        assert.deepEqual(findItemsOver([
            { name: 'pears', qty: 3 },
            { name: 'bananas', qty: 27 },
        ], 25), [
                { name: 'bananas', qty: 27 }
            ]);
    });

    it("should return false for items with quantity over 25", function () {
        assert.deepEqual(findItemsOver([
            { name: 'apples', qty: 10 },
            { name: 'apples', qty: 3 },
        ],25), []);
    });
});
