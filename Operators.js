let a = 5,
  b = 22;

// ARITHMETIC OPERATORS

// + -> Addition
console.log(a + b);

// - -> Subtraction
console.log(a - b);

// * -> Multiplication
console.log(a * b);

// / -> Division
console.log(a / b);

// % -> Modulus
console.log(a % b); // The remainder of 2 numbers is the modulo (Here its 5)

// ** -> Exponentiation
console.log(b ** a); // b to the power a

// ++ -> Increment
let c = a++; // Stores "a" value in "c" and then increases the value of "a" by 1 (c = 5, a = 6)
let d = ++b; // First increments the value of "b" by 1 and then stores the value in "d" (b = 23, d = 23)

// -- -> Decrement
let e = a--; // Stores the value of "a" in "e" and the decrements the value by 1
let f = --a; // First decrements the value of "a" by 1 and then stores its value in "f"

// -------------------------------------------------------------------------------------------

// ASSIGNMENT OPERATORS

// = -> x=y
a = b; // Stores the value of "a" in "b"

// += -> x+y;
a += b; // Same as "a=a+b"

// -= -> x-y;
a -= b; // Same as "a=a-b"

// *= -> x*y;
a *= b; // Same as "a=a*b"

// /= -> x/y;
a /= b; // Same as "a=a/b"

// %= -> x%y;
a %= b; // Same as "a=a%b"

// **= -> x**y;
a **= b; // Same as "a=a**b"

// -------------------------------------------------------------------------------------------

// COMPARISON OPERATORS

a = 5;
b = "5";

// == -> Equal to (returns true or false)
console.log(a == b); // Prints true. Since "a" value is equal to "b"

// != -> Not equal to (returns true or false)
console.log(a != b); // Prints false. Since "a" value is equal to "b";

// === -> Equal value and type
console.log(a === b); // Prints false. Because typeOf "a"(int) is not equal to typeOf "b"(string)

// !== -> Not equal value or not equal type
console.log(a !== b); // Prints true, since typeOf "a"(int) is not equal to typeOf "b"(string)

// > -> Greater than
console.log(a > b); // Prints false, since "a" is not greater than "b"

// < -> Less than
console.log(a < b); // Prints false, since "a" is not smaller than "b"

// ? -> Ternary operator
// Ternary operator returns the first value before ":" if the condition is true and last value if the condition is false.
console.log(a !== b ? "Correct" : "Wrong"); // Prints "Correct"
console.log(a === b ? "Correct" : "Wrong"); // Prints "Wrong"
