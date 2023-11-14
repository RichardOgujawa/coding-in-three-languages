"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_second_lowest_graded_students = void 0;
//Imports
var readline = require('readline');
function get_second_lowest_graded_students(arr) {
    //Get the second lowest grade
    var grades = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var _a = arr_1[_i], name_1 = _a[0], grade = _a[1];
        grades.push(grade);
    }
    var gradeSet = new Set(grades);
    var secondLowestGrade = Array.from(gradeSet).sort(function (a, b) { return a - b; })[1];
    //Create an array of student names that got that grade
    var secondLowestGradedStudents = [];
    for (var _b = 0, arr_2 = arr; _b < arr_2.length; _b++) {
        var _c = arr_2[_b], name_2 = _c[0], grade = _c[1];
        if (grade == secondLowestGrade)
            secondLowestGradedStudents.push(name_2);
    }
    return secondLowestGradedStudents.sort();
}
exports.get_second_lowest_graded_students = get_second_lowest_graded_students;
//JSON.parse the string to turn from a string to an actual array of arrays
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question('Enter something: ', function (userInput) {
    try {
        var resultArray = JSON.parse(userInput);
        for (var _i = 0, _a = get_second_lowest_graded_students(resultArray); _i < _a.length; _i++) {
            var name_3 = _a[_i];
            console.log(name_3);
        }
    }
    catch (error) {
        console.error('Error parsing JSON:', error.message);
    }
    r1.close();
});
