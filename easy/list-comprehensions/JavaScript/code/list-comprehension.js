"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list_comp = void 0;
function list_comp(x, y, z, n) {
    var results = [];
    for (var i = 0; i <= x; i++) {
        for (var j = 0; j <= y; j++) {
            for (var k = 0; k <= z; k++) {
                results.push([i, j, k]);
            }
        }
    }
    var filteredResults = results.filter(function (coordinate) {
        var sum = coordinate.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        return sum != n;
    });
    return filteredResults;
}
exports.list_comp = list_comp;
console.log(list_comp(1, 1, 1, 2));
