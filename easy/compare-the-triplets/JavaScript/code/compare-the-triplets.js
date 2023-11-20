"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTheTriplets = void 0;
var readline = require('readline');
//function that finds who got better ratings
function compareTheTriplets(a, b) {
    var ratings = {
        alice_rating: 0,
        bob_rating: 0,
    };
    if (a.length == b.length && a.length == 3) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] > b[i])
                ratings['alice_rating'] += 1;
            else if (b[i] > a[i])
                ratings['bob_rating'] += 1;
        }
    }
    else {
        throw new Error('Please make sure you input 3 review ratings.');
    }
    return ratings;
}
exports.compareTheTriplets = compareTheTriplets;
// Make a function to ask the user for two sets of ratings
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function questionAsync(query) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    r1.question(query, function (answer) {
                        resolve(answer);
                    });
                })];
        });
    });
}
function getInput() {
    return __awaiter(this, void 0, void 0, function () {
        var alice_results, bob_results, i, alice_input, bob_input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alice_results = [];
                    bob_results = [];
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 6];
                    if (!(i == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, questionAsync("What was Alice's Ratings?")];
                case 2:
                    alice_input = _a.sent();
                    alice_results = alice_input
                        .trim()
                        .split(' ')
                        .map(function (str) { return parseInt(str, 10); });
                    _a.label = 3;
                case 3: return [4 /*yield*/, questionAsync("What was Bob's Ratings?")];
                case 4:
                    bob_input = _a.sent();
                    bob_results = bob_input
                        .trim()
                        .split(' ')
                        .map(function (str) { return parseInt(str, 10); });
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    r1.close();
                    return [2 /*return*/, [alice_results, bob_results]];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var results, _i, _a, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getInput()];
                case 1:
                    results = _b.sent();
                    for (_i = 0, _a = Object.values(compareTheTriplets(results[0], results[1])); _i < _a.length; _i++) {
                        result = _a[_i];
                        console.log(result);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
