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

// -------------------------------------------------------------------------------------------

// STRING METHODS
console.log(person1.length); // Prints length of string: "5"
console.log(person1.toUpperCase()); // Converts the string to uppercase
console.log(person1.toLowerCase()); // converts the string to lowercase
console.log(person1.slice(2, 5)); // returns the string from index 2 to 5.
console.log(person1.replace("Bin", "Gone")); // Replaces the first word (Bin) in string with second word(Gone).
console.log(person1.concat(" is good")); // Appends " is good" to person1

/* 
  Note: The string methods does not change the original string but returns new changed value.
  eg: "person1" value is still "Binod" after performing all the above string methods. if we
  want to change the value of person1 itself then do -> person1 = person1.toUpperCase();
*/
