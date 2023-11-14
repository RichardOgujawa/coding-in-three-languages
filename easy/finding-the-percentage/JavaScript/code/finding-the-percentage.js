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
exports.averageScore = void 0;
var readline = require('readline');
var numOfEntries;
var selectedStudent;
var student_marks = {};
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//This is a custom async functino which returns the question we ask the user and hands us the answer once they press Enter
function questionAsync(query) {
    return new Promise(function (resolve) {
        r1.question(query, function (answer) {
            resolve(answer);
        });
    });
}
function getStudentData(count) {
    return __awaiter(this, void 0, void 0, function () {
        var studentData, data, name_1, scores;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(count <= numOfEntries)) return [3 /*break*/, 11];
                    if (!(Object.keys(student_marks).length == numOfEntries)) return [3 /*break*/, 4];
                    return [4 /*yield*/, questionAsync("Enter which student you'd like the grade average for: ")];
                case 1:
                    selectedStudent = _a.sent();
                    if (!!Object.keys(student_marks).includes(selectedStudent)) return [3 /*break*/, 3];
                    console.error("User doesn't exist in the database. Please select again.");
                    return [4 /*yield*/, getStudentData(count)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    r1.close();
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, questionAsync('Enter student name and their three grades: ')];
                case 5:
                    studentData = _a.sent();
                    data = studentData.trim().split(' ');
                    if (!(data.length !== 4)) return [3 /*break*/, 7];
                    // If the user inputs more data than is required of them
                    console.error('Invalid input. Please enter the student\'s name and exactly three scores, for example: "Harry 35 48 91"');
                    //Run the current entry again
                    return [4 /*yield*/, getStudentData(count)];
                case 6:
                    //Run the current entry again
                    _a.sent(); // Repeat the current entry
                    return [3 /*break*/, 11];
                case 7:
                    if (!Object.keys(student_marks).includes(data[0])) return [3 /*break*/, 9];
                    console.error('Student already exists in the database.');
                    return [4 /*yield*/, getStudentData(count)];
                case 8:
                    _a.sent(); // Repeat the current entry
                    return [3 /*break*/, 11];
                case 9:
                    name_1 = data.shift();
                    scores = data.slice(1).map(function (score) { return parseFloat(score); });
                    //Update the dictionary
                    student_marks[name_1] = scores;
                    console.log('Successful entry recorded for', name_1);
                    return [4 /*yield*/, getStudentData(count + 1)];
                case 10:
                    _a.sent(); // Move to the next entry
                    _a.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
// Define a function that gets the average of the student's scores
function averageScore(arr) {
    return arr.reduce(function (acc, score) { return acc + score; }, 0) / arr.length;
}
exports.averageScore = averageScore;
//Call the functions in the correct order
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, questionAsync('How many students are in the dataset? ')];
                case 1:
                    n = _a.sent();
                    //Parse n from a string into an int
                    numOfEntries = parseInt(n, 10);
                    // Start getting entries, count starts at zero and increments till we get numOfEntries numnber of students and their scores, and accumulating the data in student_marks
                    return [4 /*yield*/, getStudentData(0)];
                case 2:
                    // Start getting entries, count starts at zero and increments till we get numOfEntries numnber of students and their scores, and accumulating the data in student_marks
                    _a.sent();
                    // Get the student that the user requests
                    console.log(averageScore(student_marks[selectedStudent.trim()]));
                    return [2 /*return*/];
            }
        });
    });
}
main();
