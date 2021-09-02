/**
 * ********************************************************************************
 * Purpose: The purpose of this program to learn about call, apply and bind method
 *
 * @author Dhiraj
 * @version 1.0
 * @since 02-09-2021
 * ********************************************************************************
 */

let myName = {
    firstName : "Dhiraj",
    lastName : "Sharma"
}

let printFullName = function (homeTown, state) {
    console.log(this.firstName, " ", this.lastName, " From ", homeTown, ",",state);
}

let myName2 = {
    firstName : "Anil",
    lastName : "Sharma"
}


//call method -  is like borrowing the function to use 

printFullName.call(myName, "Hisar", "Haryana");
printFullName.call(myName2, "Udaipur", "Rajasthan");

/**
 *apply method - it is same like call but in this case we pass the argument as arrayList
  to the function arguments eg :-
 */

printFullName.apply(myName, ["Hisar", "Haryana"]);

/**
 * Bind Method - Unlike call and apply it don't call the function directly.
 * but it it bind the function that with object. eg:- It will create a copy 
 * of printFullName and bind it with the object and will return a function.
 * so we can call or invoke it leter.
 */

let printMyName = printFullName.bind(myName, "Hisar", "Haryana");
console.log(printMyName); // Output : [Function: bound printFullName]
printMyName();