"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float_division = exports.integer_division = void 0;
function integer_division(int1, int2) {
    //Round down instead or rounding to nearest because for example 3 divided by 5 is 0 Remainder 3, as 5 goes into 3 zero times and there's 3 left over.
    return Math.floor(int1 / int2);
}
exports.integer_division = integer_division;
function float_division(int1, int2) {
    return int1 / int2;
}
exports.float_division = float_division;
console.log(integer_division(3, 5));
console.log(float_division(3, 5));
console.log(integer_division(4, 3));
console.log(float_division(4, 3));
