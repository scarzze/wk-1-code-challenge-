const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentGrade() {
    rl.question("Enter student marks (0 to 100): ", function(marks) {
        marks = Number(marks);

        // Check if the input is a valid number
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Please enter a valid mark between 0 and 100.");
            rl.close();
            return; // Exit the function if the input is invalid
        }

        // Determine the grade based on marks
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Output student's grade
        console.log(`Your marks are ${marks} and your grade is ${grade}.`);
        rl.close();
    });
}

getStudentGrade();
