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
exports.catsAndAMouse = void 0;
var readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function questionAsync(query) {
    // Create a new question which takes the answer and resolves it from the promise which becomes the expression which is what questionAsync returns
    return new Promise(function (resolve) {
        r1.question(query, function (answer) {
            resolve(answer);
        });
    });
}
function catsAndAMouse(catA, catB, mouseC) {
    var distCatA = Math.abs(catA - mouseC);
    var distCatB = Math.abs(catB - mouseC);
    var result;
    if (distCatA < distCatB) {
        result = 'Cat A';
    }
    else if (distCatA > distCatB) {
        result = 'Cat B';
    }
    else {
        result = 'Mouse C';
    }
    return result;
}
exports.catsAndAMouse = catsAndAMouse;
function getInput(count, numOfGames) {
    return __awaiter(this, void 0, void 0, function () {
        var playerPositions, positions, positionsArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(count < numOfGames)) return [3 /*break*/, 5];
                    return [4 /*yield*/, questionAsync('What are the positions of the players CatA, CatB and MouseC?')];
                case 1:
                    positions = _a.sent();
                    positionsArr = positions
                        .split(' ')
                        .map(function (position) { return parseInt(position); });
                    if (!(positionsArr.length == 3)) return [3 /*break*/, 3];
                    playerPositions = positionsArr;
                    console.log(catsAndAMouse(playerPositions[0], positionsArr[1], positionsArr[2]));
                    return [4 /*yield*/, getInput(count + 1, numOfGames)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    playerPositions = undefined;
                    return [4 /*yield*/, getInput(count, numOfGames)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, playerPositions];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var numOfGames, numOfGamesInt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, questionAsync('How many games do you want to play?')];
                case 1:
                    numOfGames = _a.sent();
                    numOfGamesInt = parseInt(numOfGames, 10);
                    return [4 /*yield*/, getInput(0, numOfGamesInt)];
                case 2:
                    _a.sent();
                    r1.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
