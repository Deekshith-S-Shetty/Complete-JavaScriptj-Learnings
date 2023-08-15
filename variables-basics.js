// Variable is a container that stores a value.
a = "Hi";
console.log(a); // Prints Hi as output.

// The javascript vairables are case sensitive ("a" & "A" are treated as different variables).
b = 5;
B = 6;
console.log(b); // Prints 5.
console.log(B); // Prints 6.

// A Variable only allow "letters", "numbers", "_" , or "$" in their name.
c_var$ = "hi";
console.log(c_var$);

// We can start a variable name with "letters", "_" , or "$" sign but not numbers.
_c = "hi"; // 2c = "hi" will throw an error.

// The value and type of javascript variable can be changed during runtime.
let d = 7;
console.log(d); //Prints 7.
d = "hi";
console.log(d); //Prints hi.

// javascript reserved words(if, for, let...) cannot be used as a vairable name.
// "for = 5" is not possible.

// There are 4 ways to declare a variable in js (let, var, const, no declaration) which we will see later.
let a = 5;
var b = 5;
const c = 5;
d = 5;
