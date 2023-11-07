"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print_to_n = void 0;
function print_to_n(n) {
    var result = '';
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
exports.print_to_n = print_to_n;
console.log(print_to_n(3));
