"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRunnerUp = void 0;
function findRunnerUp(arr) {
    var runnerUpScoreArr = Array.from(new Set(arr));
    var runnerUpScoreSorted = runnerUpScoreArr.sort(function (a, b) { return b - a; });
    return runnerUpScoreSorted[1];
}
exports.findRunnerUp = findRunnerUp;
console.log(findRunnerUp([1, 2, 3, 4, 6, 6, 5]));
