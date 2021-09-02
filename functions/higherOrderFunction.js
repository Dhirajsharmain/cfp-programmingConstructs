/**
 * ********************************************************************************
 * Purpose: The purpose of this program to learn higher order function
 *
 * @author Dhiraj
 * @version 1.0
 * @since 02-09-2021
 * ********************************************************************************
 */

/**
 * Higher Order Function - Is a function that takes function as an argument and returns 
 * a function called higher order function.
 * so in below example function 'y' is a higher order order function.
 */

function x() {
    console.log("this is function x");
}

function y(x) {
    x();
}

/**
 * example of functional programming or generic functions
 * Function programming deals with pure functions, conposition of functions, reusability
 * modularity and so on. 
 */


const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

/**
 * The above calculate function is similar to map function in working. see below example.
 * so we can say we wrote our implimentation of map, this is the power of function programming.
 */

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area));

console.log(radius.calculate(area));

/**
 * In above example we have create a function just like a map function and this is the polyfill 
 * for map.
 * 
 * polyfill - 
 */