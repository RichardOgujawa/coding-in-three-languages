"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = void 0;
function isLeapYear(year) {
    var isLeapYearBool = false;
    if (!(year % 4)) {
        if (!(year % 400)) {
            isLeapYearBool = true;
        }
        else if (!(year % 400)) {
            isLeapYearBool = false;
        }
    }
    else {
        isLeapYearBool = false;
    }
    return isLeapYearBool;
}
exports.isLeapYear = isLeapYear;
console.log(isLeapYear(1990));
