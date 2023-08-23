// Below, "Binod" & and "Prasad" are strings, the typeof person1 & person2 is string.
// String can be wrapped in either '', "" or ``.
let person1 = "Binod";
let person2 = "Prasad";

console.log(typeof person1); // Prints "string"
console.log(person1[0]); // Prints "B";
console.log(person1[1]); // Prints "i";

// -------------------------------------------------------------------------------------------

// Literals -> using literals we can access a variable inside a string (`${variable}`).

// 1.without literal
console.log("${person1} and ${person2} are friends");
// Output: ${person1} and ${person2} are friends

// 2.with literal
console.log(`${person1} and ${person2} are friends`);
// Output: Binod and Prasad are friends
