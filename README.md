_Student Grade Calculator_

This project is designed to calculate and display a student's grade based on their marks. The program prompts the user to enter a score, then determines the appropriate grade using a series of conditional checks. It is built to run in a Node.js environment using the readline module to capture user input from the command line.
Features

    Input Validation: Ensures that the user provides a valid numeric score between 0 and 100.
    Grade Calculation: Based on the input marks, the program assigns a grade according to the following scale:
        A: 80 and above
        B: 60 to 79
        C: 50 to 59
        D: 40 to 49
        E: Below 40
    User-Friendly Output: Once the grade is calculated, the program outputs the student's marks along with their grade.

How It Works

    Prompt for Marks: The program asks the user to input their marks (0-100).
    Input Validation: It checks that the input is a valid number within the specified range.
    Grade Assignment: Based on the valid input, the program assigns a grade.
    Output the Result: Finally, it outputs the student's marks and their corresponding grade.

Installation & Usage

    Clone or download this repository to your local machine.

    Ensure you have Node.js installed on your machine.

    Open the terminal and navigate to the project directory.

    Run the following command to execute the program:

    node index.js

    Enter the student's marks when prompted.

Example

Input:

Enter student marks (0 to 100): 75

Output:

Your marks are 75 and your grade is B.


 ** 2nd challenge**

Sure! Here's the README file in one complete block:
Speed Check Program
Overview

This program checks if a vehicle is over-speeding and calculates points based on how much the speed limit has been exceeded. It determines whether the driver will face penalties or have their license suspended based on the excess speed.
Features

    Speed Limit Check: The program checks if the entered speed exceeds the speed limit of 70.
    Excess Speed Calculation: It calculates how much the driver is speeding over the limit.
    Points Calculation: Points are calculated for every 5 units of excess speed.
    License Suspension: If the points exceed 12, the program will suspend the driver's license.

How It Works

    Speed Input: The program accepts the speed of the vehicle.
    Check Speed Limit: If the speed is less than 70, it outputs "Ok", meaning the driver is within the speed limit.
    Excess Speed Calculation: If the speed is above 70, it calculates the excess speed.
    Points Calculation: It divides the excess speed by 5 and rounds down the result to determine the number of penalty points.
    License Suspension: If the driver has more than 12 points, their license is suspended. Otherwise, the program displays the number of points.

Code Breakdown

function checkSpeed(speed) {
  if (speed < 70) {
      console.log("Ok");
  } else {
      const excessSpeed = speed - 70; // Calculate excess speed over 70
      let points = Math.floor(excessSpeed / 5);  // Calculate penalty points

      if (points > 12) {
          console.log("License suspended");
      } else {
          console.log("Points: " + points); // Display points if less than 13
      }
  }
}

checkSpeed(80);  // Test the function with an input speed

Key Variables:

    speed: The speed input by the user (e.g., 80).
    excessSpeed: The difference between the input speed and the speed limit (70).
    points: Calculated by dividing the excess speed by 5 and rounding it down.
    Output:
        If the speed is below 70, output "Ok".
        If points are above 12, output "License suspended".
        Otherwise, output "Points: X" where X is the calculated points.

Example

Input:

checkSpeed(80);

Output:

Points: 2

Input:

checkSpeed(100);

Output:

Points: 6

Input:

checkSpeed(150);

Output:

License suspended

How to Run

    Clone or download this project to your local machine.

    Make sure you have Node.js installed on your machine.

    Open the terminal and navigate to the project directory.

    Run the following command to execute the program:

    node index.js

    Enter the speed value when prompted, and it will display the result based on the logic described.

Contributing

Feel free to fork the project, make improvements, and open a pull request. If you have any questions or suggestions, please open an issue.


LAST CHALLENGE
README
Net Salary Calculation Program README
Objective

This program calculates an individual’s Net Salary based on their basic salary and benefits. It incorporates various deductions such as PAYE (tax), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund), and outputs the gross salary and net salary after applying these deductions.
Problem Solved

The task was to create a program that:

    Takes input from the user for basic salary and benefits.
    Calculates the tax (PAYE), NHIF deductions, and NSSF deductions.
    Computes the gross salary and net salary after deductions.

Method Used

The following steps were followed to achieve the desired solution:
1. Input Collection

    The program asks the user to input:
        Basic Salary: The base salary of the individual before any deductions.
        Benefits: Additional income or allowances that the individual receives.
    Both inputs are processed to calculate the gross salary.

2. Gross Salary Calculation

    Gross Salary is calculated by adding the basic salary and benefits:

    let grossSalary = basicSalary + benefits;

3. Deductions Calculation

Deductions are calculated based on specific rates for PAYE (tax), NHIF, and NSSF. These are explained below:
a. PAYE (Tax) Calculation

    Tax brackets are provided by the Kenya Revenue Authority (KRA), where the rate increases as the income level rises. For simplicity, this was handled by an if-else or switch statement.

b. NHIF Deductions

    NHIF deductions are handled based on the Kenya government’s NHIF rates, which vary according to the employee’s gross income.

c. NSSF Deductions

    NSSF deductions are calculated using a fixed rate, which is capped at a certain amount, as per the regulations.

4. Net Salary Calculation

Once the deductions (PAYE, NHIF, NSSF) are calculated, they are subtracted from the gross salary to get the net salary:

let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

Assumptions

    The tax rates for PAYE, NHIF, and NSSF were approximated based on the rates available from official government sources.
    The program does not include more complex deductions like pension contributions, loans, etc., as it focuses on basic deductions.

Tools and Technologies

    JavaScript: The core language used for the implementation.
    Node.js: Used for running the JavaScript code in a command-line environment.
    prompt-sync: This module was used to get input from the user in the command line.

Steps to Run the Program

    Install Node.js (if not already installed):
        Download from Node.js Official Website and follow the installation instructions.

    Install prompt-sync to handle user input:
        Run the following command in your terminal to install prompt-sync:

    npm install prompt-sync

Run the Program:

    Save the JavaScript code in a file, e.g., netSalaryCalculator.js.
    Open the terminal and navigate to the folder where the file is saved.
    Run the program using Node.js:

        node netSalaryCalculator.js

    Follow the prompts to input the basic salary and benefits, and the program will output the net salary after deductions.

Example

Input:

    Basic Salary: KSh 50,000
    Benefits: KSh 10,000

Output:

Gross Salary: KSh 60,000
PAYE Deduction: KSh 5,000
NHIF Deduction: KSh 1,200
NSSF Deduction: KSh 600
Net Salary: KSh 53,200

Code Structure

The program consists of the following major sections:

    Input Handling: Using prompt-sync to get user input for basic salary and benefits.
    Deductions Calculation: Logic to calculate PAYE, NHIF, and NSSF deductions based on the input salary.
    Net Salary Calculation: Summing up the deductions and subtracting from the gross salary to find the net salary.
    Output Display: Displaying the results in a formatted way to the user.

Conclusion

This solution provides an easy way for employees to compute their net salary after essential deductions. It can be expanded further by adding more advanced features such as handling pension contributions, loan repayments, or different tax regimes based on income levels.# wk-1-code-challenge-
