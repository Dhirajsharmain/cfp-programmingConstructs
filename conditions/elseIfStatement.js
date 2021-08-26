/**
 * ****************************************************************************
 * Purpose: The purpose of this program to learn about if and else if  statement
 *
 * @author Dhiraj
 * @version 1.0
 * @since 25-08-2021
 * ****************************************************************************
 */

let a = 10;

/**
 * if statement function
 */
const ifElse = () => {
    if (a > 5)
        console.log("a is grater than 5 ");
    else
        console.log("a is less than 5");
}


/**
 * else if satement function
 */
const elseIf = () => {
    if (a < 5)
        console.log("a is less than 5 ");
    else if (a == 10)
        console.log("a is equal to 10");
    else
        console.log("a is grater than 10");
}

ifElse();
elseIf();