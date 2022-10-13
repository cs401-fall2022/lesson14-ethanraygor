"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
QUnit.test('hello function', function (assert) {
    var rtVal = (0, main_1.hello)();
    assert.equal(rtVal, "Hello World!");
});
//# sourceMappingURL=test.js.map