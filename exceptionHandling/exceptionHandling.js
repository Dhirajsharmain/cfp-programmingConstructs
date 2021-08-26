/**
 * ****************************************************************************
 * Purpose: The purpose of this program to learn about exception handling
 *
 * @author Dhiraj
 * @version 1.0
 * @since 25-08-2021
 * ****************************************************************************
 */

 const fs = require("fs");
/**
 * class for throwing custom error.
 * the class customError is extending or inheriting Error.
 */
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom Error";
    }
}

/**
 * Function for reading external local json file from disc.
 * @param {path} path 
 */
const readJsonFile = (path) => {
    fs.readFile(path, "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            const data = JSON.parse(jsonString); // parsing the json string to create object, (deserialization)
            console.log("File Data is:", data[1]);

            data.forEach(element => {  //iterating object data
                console.log(element);
            });
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    });
}

readJsonFile("./data.json");