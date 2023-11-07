"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = exports.minus = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function minus(a, b) {
    return a - b;
}
exports.minus = minus;
function product(a, b) {
    return a * b;
}
exports.product = product;
function arithmeticOperator(a, b) {
    console.log(add(a, b));
    console.log(minus(a, b));
    console.log(product(a, b));
}
arithmeticOperator(3, 5);
