"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.PI = void 0;
exports.add = add;
function add(a, b) {
    return a + b;
}
exports.PI = 3.14;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
