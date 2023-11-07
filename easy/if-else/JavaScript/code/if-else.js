"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weird_checker = void 0;
function weird_checker(n) {
    if (n % 2) {
        return 'Weird';
    }
    else {
        if (n >= 2 && n <= 5) {
            return 'Weird';
        }
        if (n >= 6 && n <= 20) {
            return 'Weird';
        }
        else {
            return 'Not Weird';
        }
    }
}
exports.weird_checker = weird_checker;
console.log(weird_checker(3)); //Expected Output: 'Weird'
console.log(weird_checker(24)); //Expected Output: 'Not Weird'
