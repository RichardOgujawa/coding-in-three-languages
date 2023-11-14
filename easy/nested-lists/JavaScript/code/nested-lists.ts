//Imports
const readline = require('readline');
//Interfaces
type StudentGrade = [string, number];
export function get_second_lowest_graded_students(arr: StudentGrade[]) {
	//Get the second lowest grade
	const grades: number[] = [];
	for (const [name, grade] of arr) {
		grades.push(grade);
	}
	const gradeSet: Set<number> = new Set(grades);
	const secondLowestGrade: number = Array.from(gradeSet).sort(
		(a, b) => a - b
	)[1];

	//Create an array of student names that got that grade
	const secondLowestGradedStudents: string[] = [];
	for (const [name, grade] of arr) {
		if (grade == secondLowestGrade) secondLowestGradedStudents.push(name);
	}
	return secondLowestGradedStudents.sort();
}

//JSON.parse the string to turn from a string to an actual array of arrays
//Create the interface for readline to read the user's input
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
//Read the users input and then output the names
r1.question('Enter something: ', (userInput: string) => {
	try {
		const resultArray = JSON.parse(userInput);
		for (const name of get_second_lowest_graded_students(resultArray)) {
			console.log(name);
		}
	} catch (error: any) {
		console.error('Error parsing JSON:', error.message);
	}
	r1.close();
});
