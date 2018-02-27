//Syntax:
//let func = (arg1, arg2, arg3, ...argN) => expression
//This is an alternative to 
//let func = function(arg1, arg2, arg3, ...argN) {
//     return expression;
// }

//Example:
let sum = (a, b) => a + b;
/* The arrow function is a shorter form of:
let sum = function(a, b) {
    return a + b;
};
*/

// If we have only one argument, then parentheses can be omitted.
let double = n => n * 2;

// If there are no arguments, parentheses should be empty, but they should be present.
let sayHi = () => alert("Hello!");

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert('Greetings!');
welcome();

// Function Expression

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() {alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

// Arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);