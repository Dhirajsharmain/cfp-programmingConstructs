/**
 * ****************************************************************************
 * Purpose: The purpose of this program to learn about switch case statement
 *
 * @author Dhiraj
 * @version 1.0
 * @since 25-08-2021
 * ****************************************************************************
 */

var readLine = require('readline-sync');

let userInput = readLine.questionInt("\nEnter Day in number : ");

switch (userInput) {
    case 1:
        console.log("\nDay " + userInput + " is MONDAY");
        break;
    case 2:
        console.log("\nDay " + userInput + " is TUESDAY");
        break;
    case 3:
        console.log("\nDay " + userInput + " is WEDNESDAY");
        break;
    case 4:
        console.log("\nDay " + userInput + " is THURSDAY");
        break;
    case 5:
        console.log("\nDay " + userInput + " is FRIDAY");
        break;
    case 6:
        console.log("\nDay " + userInput + " is SATURDAY");
        break;
    case 7:
        console.log("\nDay " + userInput + " is SUNDAY");
        break;
}