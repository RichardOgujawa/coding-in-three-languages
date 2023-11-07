"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSquare = void 0;
function printSquare(n) {
    var squares = [];
    var i = 0;
    while (i < n) {
        squares.push(i * i);
        i++;
    }
    return squares;
}
exports.printSquare = printSquare;
var results = printSquare(5);
for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
}
