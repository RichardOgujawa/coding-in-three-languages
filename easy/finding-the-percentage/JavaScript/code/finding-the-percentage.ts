const readline = require('readline');
type stringNum = string | number;
let numOfEntries: number;
let selectedStudent: string;

const student_marks: { [key: string]: number[] } = {};
const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

//This is a custom async functino which returns the question we ask the user and hands us the answer once they press Enter
function questionAsync(query: string): Promise<string> {
	return new Promise((resolve) => {
		r1.question(query, (answer: string) => {
			resolve(answer);
		});
	});
}

async function getStudentData(count: number) {
	// If the count is still less than the number of entries we're trying to get input for
	if (count <= numOfEntries) {
		// If the user has inputted all the students then allow the to type out which student they'd like the average for.
		if (Object.keys(student_marks).length == numOfEntries) {
			selectedStudent = await questionAsync(
				"Enter which student you'd like the grade average for: "
			);
			//If the user puts a  name that doesn't exist in the database then ask them to try again
			if (!Object.keys(student_marks).includes(selectedStudent)) {
				console.error(
					"User doesn't exist in the database. Please select again."
				);
				await getStudentData(count);
			}
			r1.close();
		} else {
			//Otherwise get them to input more student data
			//Ask the user for student data
			const studentData = await questionAsync(
				'Enter student name and their three grades: '
			);
			// From the question, get the name and scores from
			let data: string[] = studentData.trim().split(' ');

			if (data.length !== 4) {
				// If the user inputs more data than is required of them
				console.error(
					'Invalid input. Please enter the student\'s name and exactly three scores, for example: "Harry 35 48 91"'
				);
				//Run the current entry again
				await getStudentData(count); // Repeat the current entry
			} else if (Object.keys(student_marks).includes(data[0])) {
				console.error('Student already exists in the database.');
				await getStudentData(count); // Repeat the current entry
			} else {
				// If the user inputs the right entry
				// Use the non-null assertion operator ('!') after the scores.shift() to affirm to the Typescript compiler that the value returned will not be null.
				let name = data.shift()!;
				//Get the remainder of the string and parse them into floats for the scores
				let scores: number[] = data.slice(1).map((score) => parseFloat(score));
				//Update the dictionary
				student_marks[name] = scores;

				console.log('Successful entry recorded for', name);
				await getStudentData(count + 1); // Move to the next entry
			}
		}
	}
}

// Define a function that gets the average of the student's scores
export function averageScore(arr: number[]): number {
	return arr.reduce((acc, score) => acc + score, 0) / arr.length;
}

//Call the functions in the correct order
async function main() {
	// Get the number of users from the user, n
	const n = await questionAsync('How many students are in the dataset? ');
	//Parse n from a string into an int
	numOfEntries = parseInt(n, 10);

	// Start getting entries, count starts at zero and increments till we get numOfEntries numnber of students and their scores, and accumulating the data in student_marks
	await getStudentData(0);

	// Get the student that the user requests
	console.log(averageScore(student_marks[selectedStudent.trim()]));
}

main();
