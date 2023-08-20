const a = 50,
  b = 100;

// If Statements
if (true) {
  // execute this code.
}
// if the condition inside () is true then the code executes else the code does not execute.
if (b > a) {
  console.log("Yes, it is!"); //Executes this code since b is greater than a.
}

// -------------------------------------------------------------------------------------------

// Else Statements
// we can add optional "else" statement after an "if" condition that executes when "if" does not.
if (a > b) {
  console.log("Yes, it is!"); // Does not run this line since a is not greater than b.
} else {
  console.log("No, it's not!"); // Executes this line since if failed.
}

// -------------------------------------------------------------------------------------------

// Else If Statements
if (a > b) {
  console.log("a is greater than b");
} else if (b > a) {
  console.log("b is greater than a"); // only runs this code since it is true and else is ignored.
} else {
  console.log("Both a and b are equal");
}

// -------------------------------------------------------------------------------------------

// We can also use logical operators inside the "if" or "else if" statements.
if (b > a && a != b) {
  console.log("b is greater than a and they are also not equal");
}
