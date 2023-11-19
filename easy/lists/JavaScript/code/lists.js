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
exports.checkCommand = void 0;
//Necessary imports
var readline = require('readline');
// The number of commands the user would like to perform
var numOfCommands;
//The list the user creates and modifies
var user_list = [];
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Create a function which takes in the query we want to include i the terminal question, and then outuput the resolved answer, which is the user's input
function questionAsync(query) {
    return new Promise(function (resolve) {
        r1.question(query, function (answer) {
            resolve(answer);
        });
    });
}
//Create an async recursive function which calls the question Async for each command the user has to input.
function getCommands(count) {
    return __awaiter(this, void 0, void 0, function () {
        var command, commandArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(count < numOfCommands)) return [3 /*break*/, 3];
                    return [4 /*yield*/, questionAsync('What command would you like to execute now?')];
                case 1:
                    command = _a.sent();
                    commandArr = command.trim().split(' ');
                    checkCommand(commandArr, user_list);
                    return [4 /*yield*/, getCommands(count + 1)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Function to perform the command the user wants
function checkCommand(commandArray, user_list) {
    var commandArrayInts = commandArray
        .slice(1)
        .map(function (str) { return parseInt(str, 10); });
    switch (commandArray[0].trim()) {
        case 'insert':
            user_list.splice(commandArrayInts[0], 0, commandArrayInts[1]);
            break;
        case 'remove':
            var index = user_list.indexOf(commandArrayInts[0]);
            //If it has an index of anything greater than that means it has a position in the array
            if (index > -1) {
                user_list.splice(index, 1);
            }
            break;
        case 'append':
            user_list.push(commandArrayInts[0]);
            break;
        case 'pop':
            user_list.pop();
            break;
        case 'sort':
            user_list.sort(function (a, b) { return a - b; });
            break;
        case 'reverse':
            user_list.reverse();
            break;
        case 'print':
            console.log(user_list);
            break;
        default:
            console.log("Command doesn't exist");
    }
}
exports.checkCommand = checkCommand;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = parseInt;
                    return [4 /*yield*/, questionAsync('How many commands do you want to execute?')];
                case 1:
                    numOfCommands = _a.apply(void 0, [_b.sent()]);
                    getCommands(0);
                    return [2 /*return*/];
            }
        });
    });
}
main();
