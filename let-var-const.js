// var (Should be avoided) -> has global scope. Stores "undefined" as default. can be redeclared.
// let -> used to declare block scope variable (cannot be redeclared).
// const -> also block scope variable values of const cannot be changed (cannot be redeclared or updated).

//const must be initialized during declaration of the variable.
// i.e "const a"; throws error. should be initialized -> "const a = 5"

//Block scope demo
let a = "Scoping";
{
  // let and const variables declared inside this block are treated independently.
  let a = "inside block";
  console.log(a); // Prints "inside block".
}
console.log(a); //prints "Scoping"(using var instead of let would print "inside block" as output).


// default values of variables.
var b;
console.log(b); // prints undefined.

let c;
console.log(c); // Prints undefined.

const d; //throws error (should be initialized during the declaration itself).
