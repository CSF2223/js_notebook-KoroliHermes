/* VARIABLES are containers for storing data (storing data values).
When to use Variables:
Always declare JavaScript variables with var,let, or const.
The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015 (ES6).
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.
                -- W3Schools.com
*/

/* JavaScript Identifiers / Names 
    Identifiers are JavaScript names. Identifiers are used to name variables and keywords, and functions.
    The rules for legal names are the same in most programming languages.
            A JavaScript name must begin with:
                A letter (A-Z or a-z)
                A dollar sign ($)
                Or an underscore (_)
    Subsequent characters may be letters, digits, underscores, or dollar signs.
*/


// Declare variables (without value assignment)
let score;
let lives;

// Initialize variable (declare AND Assign value simultaneously)
var num = 7;
const ageToVote = 18;       // ageToVote        -- lower camel case
let x = 5;
let y = 7;

// Use Variables
// **Note: An equal sign is used to assign values to variables.
// " = " means "gets the value of"
score = num + 3;
lives = score + 1;



/* ARRAYS: */
const newEngland = ["New Hamspire", "Vermont", "Maine", "Massachusetts", "Rhode Island", "Connecticut"];
// index values             0           1        2              3               4               5

const grades = [91, 100, 88, 95, 75, 98, 100];
// index values  0   1    2   3   4   5   6

let state = newEngland[2];
let student2 = grades[1];

// The Array object has many methods and properties






